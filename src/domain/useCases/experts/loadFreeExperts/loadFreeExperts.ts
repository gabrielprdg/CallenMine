import { ExpertModel } from '../../../models/expert'

export interface LoadFreeExperts {
  loadByDate: (date: Date) => Promise<ExpertModel[]>
}