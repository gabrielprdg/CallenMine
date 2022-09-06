import { CustomerModel } from './customer'
import { SchedulesModel } from './schedules'

export interface SchedulingModel {
  id: string
  customer: CustomerModel
  note: string
  schedules: SchedulesModel[]
}
