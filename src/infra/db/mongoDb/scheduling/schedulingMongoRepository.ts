import { AddSchedulingRepository } from '../../../../data/protocols/db/scheduling/addSchedulingRepository'
import { SchedulingModel } from '../../../../domain/models/scheduling'
import { AddSchedulingParams } from '../../../../domain/useCases/scheduling/addScheduling/AddScheduling'
import { mongoHelper } from '../helper/mongoHelper'

export class SchedulingMongoRepository implements AddSchedulingRepository {
  async add (schedulingData: AddSchedulingParams): Promise<SchedulingModel> {
    const schedulingCollection = await mongoHelper.getCollection('scheduling')
    const result = await schedulingCollection.insertOne(schedulingData)
    const scheduling = result
    console.log(scheduling)
    return mongoHelper.map(scheduling)
  }
}
