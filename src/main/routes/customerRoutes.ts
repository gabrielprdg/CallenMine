import { Router } from 'express'
import { adapRoute } from '../adapters/expressRouteAdapter'
import { makeAddCustomerController } from '../factories/controllers/customer/addCustomer/addCustomerControllerFactory'
import { makeLoadCustomerByDocumentController } from '../factories/controllers/customer/loadCustomer/loadCustomerControllerFactory'

export default (router: Router): void => {
  router.post('/customer', adapRoute(makeAddCustomerController()))
  router.get('/customer/:document', adapRoute(makeLoadCustomerByDocumentController()))
}
