import { ExpertModel } from '../../models/expert'

export interface LoadFreeExperts {
  loadExpertsByDate: (date: string) => Promise<ExpertModel[]>
}