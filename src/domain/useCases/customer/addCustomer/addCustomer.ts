import { CustomerModel } from '../../../models/customer'

export type CustomerId = Pick<CustomerModel, 'document'>
export type AddCustomerParams = Omit<CustomerModel, 'document'>

export interface AddCustomer {
  add: (addCustomerParams: AddCustomerParams) => Promise<CustomerId>
}