import { AddSchedulingRepository } from '../../../../data/protocols/db/scheduling/addSchedulingRepository'
import { LoadSchedulingsRepository } from '../../../../data/protocols/db/scheduling/loadSchedulingsRepository'
import { SchedulingModel } from '../../../../domain/models/scheduling'
import { AddSchedulingParams, SchedulingId } from '../../../../domain/useCases/scheduling/addScheduling/addScheduling'
import { mongoHelper } from '../helper/mongoHelper'

export class SchedulingMongoRepository implements AddSchedulingRepository, LoadSchedulingsRepository {
  async add (schedulingData: AddSchedulingParams): Promise<SchedulingId> {
    const schedulingCollection = await mongoHelper.getCollection('scheduling')
    const result = await schedulingCollection.insertOne(schedulingData)
    const scheduling = result.insertedId
    return mongoHelper.mapId(scheduling)
  }

  async load (): Promise<SchedulingModel[]> {
    const schedulingCollection = await mongoHelper.getCollection('scheduling')
    const result = await schedulingCollection.find().toArray()
    return mongoHelper.mapCollection(result)
  }
}

