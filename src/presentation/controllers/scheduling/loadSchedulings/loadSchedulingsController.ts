import { LoadSchedulings } from '../../../../domain/useCases/scheduling/loadSchedulings/loadSchedulings'
import { ok, serverError } from '../../../helpers/httpHelper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class LoadSchedulingsController implements Controller {
  private readonly loadSchedulings: LoadSchedulings

  constructor (loadSchedulings: LoadSchedulings) {
    this.loadSchedulings = loadSchedulings
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const schedulings = await this.loadSchedulings.load()
      return ok(schedulings)
    } catch (err) {
      return serverError(err)
    }
  }
}