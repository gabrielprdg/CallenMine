import { ObjectId } from 'mongodb'
import { AddSchedulingRepository } from '../../../../data/protocols/db/scheduling/addSchedulingRepository'
import { LoadSchedulingByIdRepository } from '../../../../data/protocols/db/scheduling/loadSchedulingByIdRepository'
import { LoadSchedulingsRepository } from '../../../../data/protocols/db/scheduling/loadSchedulingsRepository'
import { SchedulingModel } from '../../../../domain/models/scheduling'
import { AddSchedulingParams, SchedulingId } from '../../../../domain/useCases/scheduling/addScheduling/addScheduling'
import { mongoHelper } from '../helper/mongoHelper'

export class SchedulingMongoRepository implements AddSchedulingRepository, LoadSchedulingsRepository, LoadSchedulingByIdRepository {
  async add (schedulingData: AddSchedulingParams): Promise<SchedulingId> {
    const schedulingCollection = await mongoHelper.getCollection('scheduling')
    const result = await schedulingCollection.insertOne(schedulingData)
    const schedulingId = result.insertedId
    return mongoHelper.mapId(schedulingId)
  }

  async load (): Promise<SchedulingModel[]> {
    const schedulingCollection = await mongoHelper.getCollection('scheduling')
    const result = await schedulingCollection.find().toArray()
    return mongoHelper.mapCollection(result)
  }

  async loadById (id: string): Promise<SchedulingModel> {
    const schedulingCollection = await mongoHelper.getCollection('scheduling')
    const scheduling = await schedulingCollection.findOne({ _id: new ObjectId(id)})
    return scheduling && mongoHelper.map(scheduling)
  }
}

