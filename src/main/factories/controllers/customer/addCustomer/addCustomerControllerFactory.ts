import { AddCustomerController } from '../../../../../presentation/controllers/customer/addCustomer/addCustomerController'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbAddCustomer } from '../../../useCases/customer/addCustomer/dbAddCustomerFactory'
import { makeAddCustomerValidation } from './addCustomerValidationFactory'


export const makeAddCustomerController = (): Controller => {
  const controller = new AddCustomerController(makeAddCustomerValidation(), makeDbAddCustomer())
  return controller
}