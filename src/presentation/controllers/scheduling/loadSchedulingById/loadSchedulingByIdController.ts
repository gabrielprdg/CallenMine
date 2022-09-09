import { AddScheduling, Schedules } from '../../../../domain/useCases/scheduling/addScheduling/addScheduling'
import { LoadSchedulingById } from '../../../../domain/useCases/scheduling/loadSchedulingById/loadSchedulingById'
import { notFoundError } from '../../../errors/notFoundError'
import { badRequest, notFound, ok, timeOut } from '../../../helpers/httpHelper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { Validation } from '../../../protocols/validation'

export default class LoadSchedulingByIdController implements Controller {
  private readonly validation: Validation
  private readonly loadSchedulingById: LoadSchedulingById

  constructor (validation: Validation, loadSchedulingById: LoadSchedulingById) {
    this.validation = validation
    this.loadSchedulingById = loadSchedulingById
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) {
        return badRequest(error)
      }

      const { id } = httpRequest.params

      const scheduling = await this.loadSchedulingById.loadById(id)

      if (scheduling) {
        return ok(scheduling)
      } else {
        return notFound(new notFoundError('scheduling'))
      }

    } catch (err) {
      throw Error(err)
    }
  }
}
