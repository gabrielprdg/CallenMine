import { CustomerModel } from '../../../models/customer'


export interface LoadCustomerByDocument {
  loadByDocument: (document: string) => Promise<CustomerModel>
}