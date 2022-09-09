import { CustomerModel } from '../../../../domain/models/customer'
import { LoadCustomerByDocument } from '../../../../domain/useCases/customer/loadCustomerByDocument/loadCustomerByDocument'
import { LoadCustomerByDocumentRepository } from '../../../protocols/db/customer/loadCustomerByDocumentRepository'

export class DbLoadCustomerByDocument implements LoadCustomerByDocument {
  private readonly loadCustomerByDocumentRepository: LoadCustomerByDocumentRepository
  constructor (loadCustomerByDocumentRepository: LoadCustomerByDocumentRepository) {
    this.loadCustomerByDocumentRepository = loadCustomerByDocumentRepository
  }

  async loadByDocument (document: string): Promise<CustomerModel> {
    const customer = await this.loadCustomerByDocumentRepository.loadByDocument(document)
    return customer
  }
}
