import { LoadSchedulingByExpertId } from '../../../../domain/useCases/scheduling/loadSchedulingByExpertId/loadSchedulingByExpertId'
import { LoadSchedulingById } from '../../../../domain/useCases/scheduling/loadSchedulingById/loadSchedulingById'
import { notFoundError } from '../../../errors/notFoundError'
import { notFound, ok } from '../../../helpers/httpHelper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export default class LoadSchedulingByExpertIdController implements Controller {
  private readonly loadSchedulingByExpertId: LoadSchedulingByExpertId

  constructor (loadSchedulingByExpertId: LoadSchedulingByExpertId) {
    this.loadSchedulingByExpertId = loadSchedulingByExpertId
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { expert_id } = httpRequest.params

      const schedulings = await this.loadSchedulingByExpertId.loadByExpertId(expert_id)

      if (schedulings.length) {
        return ok(schedulings)
      } else {
        return notFound(new notFoundError('schedulings'))
      }

    } catch (err) {
      throw Error(err)
    }
  }
}
