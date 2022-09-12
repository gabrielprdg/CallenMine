import { ObjectId } from 'mongodb'
import { AddExpertRepository } from '../../../../data/protocols/db/expert/addExpertRepository'
import { LoadDatesOccupiedRepository } from '../../../../data/protocols/db/expert/loadDatesOcuppiedRepository'
import { LoadFreeExpertsRepository } from '../../../../data/protocols/db/expert/loadFreeExperts'
import { ExpertModel } from '../../../../domain/models/expert'
import { AddExpertParams, ExpertId } from '../../../../domain/useCases/experts/addExpert/addExpert'
import { DatesOccupied } from '../../../../domain/useCases/experts/loadDatesOccupied/loadDatesOccupied'
import LoadDatesOccupiedController from '../../../../presentation/controllers/expert/loadDatesOcuppied/loadDatesOccupiedController'
import { mongoHelper } from '../helper/mongoHelper'

export type Dates = {
  date: string,
  type: string,
  message: string
}

export class ExpertMongoRepository implements AddExpertRepository, LoadFreeExpertsRepository, LoadDatesOccupiedRepository {
  
  async add (addExpertParams: AddExpertParams): Promise<ExpertId> {
    const expertColLection = await mongoHelper.getCollection('expert')
    const result = await expertColLection.insertOne(addExpertParams)
    const expertId = result.insertedId
    return mongoHelper.mapId(expertId)
  }

  async loadByDate(date: Date): Promise<ExpertModel[]> {
    const schedulesCollection = await mongoHelper.getCollection('schedules')
    const expertCollection = await mongoHelper.getCollection('experts')
    
    const result = await schedulesCollection.find({date: date}).toArray()

    const experts_id = result.map(res => {
      return new ObjectId(res.experts_id)
    })


    const experts = await expertCollection.find({ _id : {$in: experts_id[0] }}).toArray()


    //const experts = await expertCollection.find({ _id: result.experts_id}).toArray()
    return mongoHelper.mapCollection(experts)
  }

  async loadDates(expertId: string): Promise<DatesOccupied[]> {
    const schedulesCollection = await mongoHelper.getCollection('schedules') 
    const schedulingCollection = await mongoHelper.getCollection('scheduling')

    const res:Dates[] = []

    const results = await schedulesCollection.find({experts_id: expertId}).toArray()

    for(const result of results) {
      
      const t = await schedulingCollection.findOne({experts_id: (result._id)})
      
      res.push({
        date: result.date,
        type: 'scheduling',
        message: t?.note
      })
    }

    return mongoHelper.mapCollection(res)
  }
}
