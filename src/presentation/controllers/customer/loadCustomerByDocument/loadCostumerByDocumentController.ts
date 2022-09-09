import { LoadCustomerByDocument } from '../../../../domain/useCases/customer/loadCustomerByDocument/loadCustomerByDocument';
import { notFoundError } from '../../../errors/notFoundError';
import { notFound, ok, serverError, timeOut } from '../../../helpers/httpHelper';
import { Controller } from '../../../protocols/controller';
import { HttpRequest, HttpResponse } from '../../../protocols/http';

export class LoadCustomerByDocumentController implements Controller {
  private readonly loadCustomerByDocument: LoadCustomerByDocument

  constructor (loadCustomerByDocument: LoadCustomerByDocument) {
    this.loadCustomerByDocument = loadCustomerByDocument
  }


  async handle (httpRequest: HttpRequest): Promise<HttpResponse>{
    try {
      if (httpRequest.method !== 'GET') {
        return timeOut()
      } 

      const { document } = httpRequest.params

      const customer = await this.loadCustomerByDocument.loadByDocument(document)

      if (customer) {
        return ok(customer)
      } else {
        return notFound(new notFoundError('document'))
      }

    } catch (err) {
      return notFound(err)
    }
  }
}