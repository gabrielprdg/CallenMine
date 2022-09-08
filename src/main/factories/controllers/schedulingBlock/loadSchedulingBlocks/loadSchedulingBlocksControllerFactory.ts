import { LoadSchedulingBlocksController } from '../../../../../presentation/controllers/schedulingBlock/loadScheduleBlocks/loadSchedulingBlocksController'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbLoadSchedulingBlocks } from '../../../useCases/schedulingBlock/loadSchedulingBlocks/dbLoadSchedulingBlocksFactory'

export const makeLoadSchedulingBlocksController = (): Controller => {
  const controller = new LoadSchedulingBlocksController(makeDbLoadSchedulingBlocks())
  return controller
}