import { CustomerModel } from '../../models/customer'

export type LoadCustomerParams = {
  id: string
  name: string
}

export interface LoadCustomer {
  loadCustomerByDocument: (loadCustomerParams: LoadCustomerParams) => Promise<CustomerModel>
}