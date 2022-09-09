import { AddCustomerParams, CustomerId } from '../../../../domain/useCases/customer/addCustomer/addCustomer'

export interface AddCustomerRepository {
  add: (addCustomerParams: AddCustomerParams) => Promise<CustomerId>
}
