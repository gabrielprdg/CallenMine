import { ExpertModel } from './expert'

export interface SchedulesModel {
  id: string
  date: Date
  expertsId: string[]
}