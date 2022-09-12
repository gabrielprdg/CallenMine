import { ExpertModel } from '../../../../domain/models/expert'

export interface LoadFreeExpertsRepository {
  loadByDate(date: Date): Promise<ExpertModel[]>
}
