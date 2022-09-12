import { AddExpertController } from '../../../../../presentation/controllers/expert/addExpert/addExpertController'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbAddExpert } from '../../../useCases/expert/addExpert/dbAddExpertFactory'
import { makeAddExpertValidation } from './addExpertValidationFactory'

export const makeAddExpertController = (): Controller => {
  const controller = new AddExpertController(makeAddExpertValidation(), makeDbAddExpert())
  return controller
}