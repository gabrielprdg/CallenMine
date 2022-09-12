import { AddCustomer } from '../../../../domain/useCases/customer/addCustomer/addCustomer';
import { AddExpert } from '../../../../domain/useCases/experts/addExpert/addExpert';
import { badRequest, ok, serverError } from '../../../helpers/httpHelper';
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { Validation } from '../../../protocols/validation';

export class AddExpertController implements Controller {
  private readonly validation: Validation
  private readonly addExpert: AddExpert

  constructor (validation: Validation, addExpert: AddExpert) {
    this.validation = validation
    this.addExpert = addExpert
  }


  async handle (httpRequest: HttpRequest): Promise<HttpResponse>{
    try {
      const error = this.validation.validate(httpRequest.body)

      if (error) {
        return badRequest(error)
      }

      const { name, expertises } = httpRequest.body

      const expertId = await this.addExpert.add({name, expertises})
      return ok(expertId)
    } catch (err) {
      return serverError(err)
    }
  }
}