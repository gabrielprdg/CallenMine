import { LoadSchedulingsController } from '../../../../../presentation/controllers/scheduling/loadSchedulings/loadSchedulingsController'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbLoadSchedulings } from '../../../useCases/scheduling/loadSchedulings/dbLoadSchedulingsFactory'

export const makeLoadSchedulingsController = (): Controller => {
  const controller = new LoadSchedulingsController(makeDbLoadSchedulings())
  return controller
}