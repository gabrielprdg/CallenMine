import LoadSchedulingByIdController from '../../../../../presentation/controllers/scheduling/loadSchedulingById/loadSchedulingByIdController'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbLoadSchedulingById } from '../../../useCases/scheduling/loadSchedulingById/dbLoadSchedulingByIdFactory'

export const makeLoadSchedulingByIdController = (): Controller => {
  const controller = new LoadSchedulingByIdController(makeDbLoadSchedulingById())
  return controller
}