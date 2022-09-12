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
    const expertCollection = await mongoHelper.getCollection('expert')
    
    const result = await schedulesCollection.find({date: date}).toArray()
    
    let experts: ExpertModel[] = []
    for(const res of result[0].experts_id) {
      
      const expertsData = await expertCollection.findOne({ _id: { $ne: new ObjectId(res) }})
      
      experts.push({
        id: mongoHelper.map(expertsData?._id),
        name: expertsData?.name,
        expertises: expertsData?.expertises[0]
      })
    }

    return mongoHelper.mapCollection(experts)
  }

  async loadDates(expertId: string): Promise<DatesOccupied[]> {
    const schedulesCollection = await mongoHelper.getCollection('schedules') 
    const schedulingCollection = await mongoHelper.getCollection('scheduling')

    const res:Dates[] = []

    const results = await schedulesCollection.find({experts_id: expertId}).toArray()

    for(const result of results) {
      const scheduling = await schedulingCollection.findOne({'schedules.date': result.date})

      res.push({
        date: result.date,
        type: 'scheduling',
        message: scheduling?.note
      })
    }

    const schedulingBlockCollection = await mongoHelper.getCollection("schedulingBlock")
    const schedulingBlocks = await schedulingBlockCollection.find().toArray()

    for (const block of schedulingBlocks) {
      res.push({
        date: block.start,
        type: 'blocking',
        message: block.note
      })
    }

    return mongoHelper.mapCollection(res)
  }
}
