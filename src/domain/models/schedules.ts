import { ExpertModel } from './expert'

export interface SchedulesModel {
  id: string
  scheduling_id: string
  date: Date
  experts: ExpertModel[]
}
