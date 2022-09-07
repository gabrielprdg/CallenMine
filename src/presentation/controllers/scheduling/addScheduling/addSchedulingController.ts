import { AddScheduling } from '../../../../domain/useCases/scheduling/addScheduling/AddScheduling'
import { badRequest, ok, timeOut } from '../../../helpers/httpHelper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { Validation } from '../../../protocols/validation'

export default class AddSchedulingController implements Controller {
  private readonly validation: Validation
  private readonly addScheduling: AddScheduling

  constructor (validation: Validation, addScheduling: AddScheduling) {
    this.validation = validation
    this.addScheduling = addScheduling
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) {
        return badRequest(error)
      }

      if (httpRequest.method !== 'POST') {
        return timeOut()
      }
      
      const { customer, note, schedules } = httpRequest.body
      const scheduling = await this.addScheduling.add({ customer, note, schedules })

      return ok(scheduling)
    } catch (err) {
      throw Error(err)
    }
  }
}
