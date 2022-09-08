import { CustomerModel } from '../../../models/customer'
import { SchedulesModel } from '../../../models/schedules'
import { SchedulingModel } from '../../../models/scheduling'

export type Schedules = Omit<SchedulesModel, 'id'>
export type SchedulesParam = Omit<Schedules, 'date'>
// tipo pra retornar somente o id do scheduling

export type SchedulingId = Pick<SchedulingModel, 'id'>

export type AddSchedulingParams = {
  customer: CustomerModel
  note: string
  schedules: SchedulesParam[]
}

export interface AddScheduling {
  add: (addSchedulingParams: AddSchedulingParams) => Promise<SchedulingId>
}
