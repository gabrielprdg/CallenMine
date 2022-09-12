import { LoadDatesOccupied } from '../../../../domain/useCases/experts/loadDatesOccupied/loadDatesOccupied'
import { LoadSchedulingById } from '../../../../domain/useCases/scheduling/loadSchedulingById/loadSchedulingById'
import { notFoundError } from '../../../errors/notFoundError'
import { notFound, ok } from '../../../helpers/httpHelper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export default class LoadDatesOccupiedController implements Controller {
  private readonly loadDatesOccupied: LoadDatesOccupied

  constructor (loadDatesOccupied: LoadDatesOccupied) {
    this.loadDatesOccupied = loadDatesOccupied
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { expertId } = httpRequest.params

      const datesOccupied = await this.loadDatesOccupied.loadDates(expertId)

      if (datesOccupied) {
        return ok(datesOccupied)
      } else {
        return notFound(new notFoundError('Dates'))
      }

    } catch (err) {
      throw Error(err)
    }
  }
}
