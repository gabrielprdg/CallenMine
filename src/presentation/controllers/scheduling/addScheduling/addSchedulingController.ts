import { SchedulesData } from '../../../../domain/models/scheduling'
import { AddSchedules } from '../../../../domain/useCases/schedules/addSchedules'
import { AddScheduling } from '../../../../domain/useCases/scheduling/addScheduling/addScheduling'
import { InvalidDateError } from '../../../errors/invalidDateError'
import { badRequest, ok } from '../../../helpers/httpHelper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { Validation } from '../../../protocols/validation'

export default class AddSchedulingController implements Controller {
  private readonly validation: Validation
  private readonly addScheduling: AddScheduling
  private readonly addSchedules: AddSchedules

  constructor (validation: Validation, addScheduling: AddScheduling, addSchedules: AddSchedules) {
    this.validation = validation
    this.addScheduling = addScheduling
    this.addSchedules = addSchedules
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      //Retornando erro de validação de campos
      const error = this.validation.validate(httpRequest.body)
      if (error != null) {
        return badRequest(error)
      }

      // pegando dados da requisição
      const { customer, note, schedulesData } = httpRequest.body

      //modificando datas no formato string para o formato ISODate
      const schedules = schedulesData.map(item => {
        const schedulesWithDateFormat = {} as SchedulesData

        schedulesWithDateFormat.date = new Date(item.date)
        schedulesWithDateFormat.experts_id = item.experts_id

        return schedulesWithDateFormat
      })

      // Resolvendo logica dos 90 dias 
      let timeInDays
    
      const isoDate = new Date(schedules[0].date) as any// data do primeiro schedule
      const todayDate = new Date() as any // Data de hoje
      const timeInMiliSeconds = isoDate - todayDate
      timeInDays = Math.ceil((timeInMiliSeconds/ (1000 * 60 * 60 * 24))) // time em ml * 1000 (segundos) * 60 (minutos) * 60(horas) * 24(dias)

      if (timeInDays > 90) {
        return badRequest(new InvalidDateError('Date'))
      }else {
        // adicionando dados ao banco atraves dos casos de uso
       
        const schedulingId = await this.addScheduling.add({ customer, note, schedules})
        await this.addSchedules.add(schedules)
        return ok(schedulingId)

      }
    } catch (err) {
      throw Error(err)
    }
  }
}
