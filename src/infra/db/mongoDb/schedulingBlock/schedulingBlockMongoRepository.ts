import { AddSchedulingBlockRepository } from '../../../../data/protocols/db/schedulingBlock/addSchedulingRepository'
import { LoadSchedulingBlocksRepository } from '../../../../data/protocols/db/schedulingBlock/loadSchedulingBlocksRepository';
import { SchedulingBlockModel } from '../../../../domain/models/schedulingBlock';
import { AddScheduleBlockParams, SchedulingBlockId } from '../../../../domain/useCases/schedulingBlock/addSchedulingBlock/addSchedulingBlock';
import { mongoHelper } from '../helper/mongoHelper';

export class SchedulingBlockMongoRepository implements AddSchedulingBlockRepository, LoadSchedulingBlocksRepository {
  async add (schedulingBlockData: AddScheduleBlockParams): Promise<SchedulingBlockId> {
    const schedulingBlockCollection = await mongoHelper.getCollection('schedulingBlock')
    const result = await schedulingBlockCollection.insertOne(schedulingBlockData)
    const schedulingBlockId = result.insertedId
    return mongoHelper.mapId(schedulingBlockId)
  }

  async load(): Promise<SchedulingBlockModel[]> {
    const schedulingBlockCollection = await mongoHelper.getCollection('schedulingBlock')
    const result = await schedulingBlockCollection.find().toArray()
    return mongoHelper.mapCollection(result)
  }

}