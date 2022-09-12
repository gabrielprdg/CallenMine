import { CustomerModel } from '../../../models/customer'
import { SchedulesModel } from '../../../models/schedules'
import { SchedulingModel } from '../../../models/scheduling'

export type SchedulingId = Pick<SchedulingModel, 'id'>

export type AddSchedulingParams = Omit<SchedulingModel, 'id'>

export interface AddScheduling {
  add: (addSchedulingParams: AddSchedulingParams) => Promise<SchedulingId>
}
