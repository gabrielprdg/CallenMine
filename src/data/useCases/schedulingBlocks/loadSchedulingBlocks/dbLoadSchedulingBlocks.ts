import { SchedulingBlockModel } from '../../../../domain/models/schedulingBlock';
import { LoadSchedulingBlocks } from '../../../../domain/useCases/schedulingBlock/loadSchedulingBlocks/loadSchedulingBlocks'
import { LoadSchedulingBlocksRepository } from '../../../protocols/db/schedulingBlock/loadSchedulingBlocksRepository';

export class DbLoadSchedulingBlocks implements LoadSchedulingBlocks {
  private readonly loadSchedulingBlocksRepository: LoadSchedulingBlocksRepository

  constructor (loadSchedulingBlocksRepository: LoadSchedulingBlocksRepository) {
    this.loadSchedulingBlocksRepository = loadSchedulingBlocksRepository
  }

  async load (): Promise<SchedulingBlockModel[]> {
    const schedulingBlocks = await this.loadSchedulingBlocksRepository.load()
    return schedulingBlocks
  }
}
                                 