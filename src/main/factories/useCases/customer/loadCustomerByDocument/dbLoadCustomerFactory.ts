import { DbLoadCustomerByDocument } from '../../../../../data/useCases/customer/loadCustomerByDocument/dbLoadCustomerByDocument'
import { DbLoadSchedulings } from '../../../../../data/useCases/scheduling/loadSchedulings/dbLoadSchedulings'
import { LoadCustomerByDocument } from '../../../../../domain/useCases/customer/loadCustomerByDocument/loadCustomerByDocument'
import { LoadSchedulings } from '../../../../../domain/useCases/scheduling/loadSchedulings/loadSchedulings'
import { CustomerMongoRepository } from '../../../../../infra/db/mongoDb/customer/customerMongoRepository'
import { SchedulingMongoRepository } from '../../../../../infra/db/mongoDb/scheduling/schedulingMongoRepository'

export const makeDbLoadCustomerByDocument = (): LoadCustomerByDocument => {
  const customerMongoRepository = new CustomerMongoRepository()
  return new DbLoadCustomerByDocument(customerMongoRepository)
}