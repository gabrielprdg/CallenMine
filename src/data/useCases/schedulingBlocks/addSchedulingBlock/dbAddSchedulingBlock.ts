import { AddScheduleBlockParams, AddSchedulingBlock, SchedulingBlockId } from '../../../../domain/useCases/schedulingBlock/addSchedulingBlock/addSchedulingBlock'
import { AddSchedulingBlockRepository } from '../../../protocols/db/schedulingBlock/addSchedulingRepository'

export class DbAddSchedulingBlock implements AddSchedulingBlock {
  private readonly addSchedulingBlockRepository: AddSchedulingBlockRepository

  constructor(addSchedulingBlockRepository: AddSchedulingBlockRepository) {
    this.addSchedulingBlockRepository = addSchedulingBlockRepository
  }

  async add (data: AddScheduleBlockParams): Promise<SchedulingBlockId> {
    const schedulingBlock = await this.addSchedulingBlockRepository.add(data)
    return schedulingBlock
  }
}