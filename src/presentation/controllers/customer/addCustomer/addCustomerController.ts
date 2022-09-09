import { AddCustomer } from '../../../../domain/useCases/customer/addCustomer/addCustomer';
import { badRequest, ok, serverError } from '../../../helpers/httpHelper';
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { Validation } from '../../../protocols/validation';

export class AddCustomerController implements Controller {
  private readonly validation: Validation
  private readonly addCustomer: AddCustomer

  constructor (validation: Validation, addCustomer: AddCustomer) {
    this.validation = validation
    this.addCustomer = addCustomer
  }


  async handle (httpRequest: HttpRequest): Promise<HttpResponse>{
    try {
      const error = this.validation.validate(httpRequest.body)

      if (error) {
        return badRequest(error)
      }

      const { name } = httpRequest.body

      const customerId = await this.addCustomer.add({name})
      return ok(customerId)
    } catch (err) {
      return serverError(err)
    }
  }
}