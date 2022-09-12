import { LoadSchedulingById } from '../../../../domain/useCases/scheduling/loadSchedulingById/loadSchedulingById'
import { notFoundError } from '../../../errors/notFoundError'
import { notFound, ok } from '../../../helpers/httpHelper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export default class LoadSchedulingByIdController implements Controller {
  private readonly loadSchedulingById: LoadSchedulingById

  constructor (loadSchedulingById: LoadSchedulingById) {
    this.loadSchedulingById = loadSchedulingById
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { scheduling_id } = httpRequest.params

      const scheduling = await this.loadSchedulingById.loadById(scheduling_id)

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
