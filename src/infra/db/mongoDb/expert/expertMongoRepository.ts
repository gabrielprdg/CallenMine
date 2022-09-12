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

    console.log('res',result)
    
    let experts: ExpertModel[] = []
    for(const res of result[0].experts_id) {
      console.log('2', res)
      const expertsData = await expertCollection.find({ _id : new ObjectId(res) }).toArray()
      const expertMap = await mongoHelper.mapCollection(expertsData)
      console.log('expertMap',expertMap)
      experts.push({
        id: expertMap[0].id,
        name: expertMap[0].name,
        expertises: expertMap[0].expertises
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
