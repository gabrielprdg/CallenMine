import { SchedulingBlockModel } from '../../../../domain/models/schedulingBlock'

export interface LoadSchedulingBlocksRepository {
  load (): Promise<SchedulingBlockModel[]>
}
