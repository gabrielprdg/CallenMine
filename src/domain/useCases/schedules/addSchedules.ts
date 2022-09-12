import { SchedulesModel } from '../../models/schedules'

export type SchedulesId = Pick<SchedulesModel, 'id'>
export type AddSchedulesParams = Omit<SchedulesModel, 'id'>

export interface AddSchedules {
  add: (addSchedulesParams: AddSchedulesParams[]) => Promise<void>
}