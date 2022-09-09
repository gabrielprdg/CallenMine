import { CustomerModel } from '../../../../domain/models/customer'

export interface LoadCustomerByDocumentRepository {
  loadByDocument: (document: string) => Promise<CustomerModel>
}

