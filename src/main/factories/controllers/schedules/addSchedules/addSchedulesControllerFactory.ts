import { AddSchedulesController } from '../../../../../presentation/controllers/schedules/addSchedules/addSchedulesController'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbAddSchedules } from '../../../useCases/schedules/addSchedules/dbAddSchedulesFactory'
import { makeAddSchedulesValidation } from './addSchedulesValidationFactory'


export const makeAddSchedulesController = (): Controller => {
  const controller = new AddSchedulesController(makeAddSchedulesValidation(), makeDbAddSchedules())
  return controller
}