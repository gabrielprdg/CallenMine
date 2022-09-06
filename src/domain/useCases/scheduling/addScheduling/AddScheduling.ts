import { CustomerModel } from '../../../models/customer'
import { SchedulesModel } from '../../../models/schedules'
import { SchedulingModel } from '../../../models/scheduling'

export type SchedulesModelParam = Omit<SchedulesModel, 'id'>

export type AddSchedulingParams = {
  customer: CustomerModel
  note: string
  schedules: SchedulesModelParam[]
}

export interface AddScheduling {
  add: (addSchedulingParams: AddSchedulingParams) => Promise<SchedulingModel>
}
