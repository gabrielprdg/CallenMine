import { CustomerModel } from './customer'
import { SchedulesModel } from './schedules'

export type SchedulesData = {
  date: Date
  experts_id: string[]
}

export interface SchedulingModel {
  id: string
  customer: string
  note: string
  schedules: SchedulesModel[]
}
