import { AddSchedulingBlockController } from '../../../../../presentation/controllers/schedulingBlock/addSchedulingBlock/addSchedulingBlockController'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbAddSchedulingBlock } from '../../../useCases/schedulingBlock/addSchedulingBlock/dbAddSchedulingBlockFactory'
import { makeAddSchedulingBlockValidation } from './addSchedulingBlockValidationFactory'

export const makeAddSchedulingBlockController = (): Controller => {
  const controller = new AddSchedulingBlockController(makeAddSchedulingBlockValidation(), makeDbAddSchedulingBlock())
  return controller
}