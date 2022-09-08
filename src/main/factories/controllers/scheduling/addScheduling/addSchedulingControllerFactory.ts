import AddSchedulingController from '../../../../../presentation/controllers/scheduling/addScheduling/addSchedulingController'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbAddScheduling } from '../../../useCases/scheduling/addScheduling/dbAddSchedulingFactory'
import { makeAddSchedulingValidation } from './addSchedulingValidationFactory'

// factory é basicamente um pattern de desenvolvimento que serve para fornecer
// a possibilidade de criarmos uma fabrica para criação dos nossos objetos em tempo de execução

export const makeAddSchedulingController = (): Controller => {
  const controller = new AddSchedulingController(makeAddSchedulingValidation(), makeDbAddScheduling())
  return controller
}