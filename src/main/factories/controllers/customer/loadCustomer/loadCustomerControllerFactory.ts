import { LoadCustomerByDocumentController } from '../../../../../presentation/controllers/customer/loadCustomerByDocument/loadCostumerByDocumentController'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbLoadCustomerByDocument } from '../../../useCases/customer/loadCustomerByDocument/dbLoadCustomerFactory'

export const makeLoadCustomerByDocumentController = (): Controller => {
  const controller = new LoadCustomerByDocumentController(makeDbLoadCustomerByDocument())
  return controller
}