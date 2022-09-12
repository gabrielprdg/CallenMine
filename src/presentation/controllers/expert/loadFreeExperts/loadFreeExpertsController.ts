import axios from 'axios'
import { LoadFreeExperts } from '../../../../domain/useCases/experts/loadFreeExperts/loadFreeExperts'
import { apiHolidays } from '../../../../infra/abstractApiHolidays/abstractApiHolidays'
import { notFoundError } from '../../../errors/notFoundError'
import { dateHelper } from '../../../helpers/dateHelper'
import { noContent, notFound, ok } from '../../../helpers/httpHelper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export default class LoadFreeExpertsController implements Controller {
  private readonly loadFreeExperts: LoadFreeExperts

  constructor (loadFreeExperts: LoadFreeExperts) {
    this.loadFreeExperts = loadFreeExperts
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { date } = httpRequest.query
      console.log(date)
     
      const { dayDefault, monthDefault, yearDefault } = dateHelper(date)
      
      const baseURL = apiHolidays('BR', dayDefault, monthDefault, yearDefault)

      const holidayData = await axios.get(baseURL)
      const holiday = holidayData.data

      if (holiday.length) {
        return noContent(holiday)
      }else {
        const freeExperts = await this.loadFreeExperts.loadByDate(new Date(`${monthDefault}-${dayDefault}-${yearDefault}`))
        if (freeExperts) {
          return ok(freeExperts)
        } else {
          return notFound(new notFoundError('experts'))
        }
      }

    } catch (err) {
      throw Error(err)
    }
  }
}
