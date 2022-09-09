import { DbAddCustomer } from '../../../../../data/useCases/customer/addCustomer/dbAddCustomer'
import { AddCustomer } from '../../../../../domain/useCases/customer/addCustomer/addCustomer'
import { CustomerMongoRepository } from '../../../../../infra/db/mongoDb/customer/customerMongoRepository'

export const makeDbAddCustomer = (): AddCustomer => {
  const customerMongoRepository = new CustomerMongoRepository()
  return new DbAddCustomer(customerMongoRepository)
}