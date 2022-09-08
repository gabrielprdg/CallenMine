import { SchedulesModel } from '../../../models/schedules'

export interface LoadSchedulings {
  loadSchedulings: () => Promise<SchedulesModel[]>
}