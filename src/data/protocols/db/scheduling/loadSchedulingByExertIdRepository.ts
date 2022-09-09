import { SchedulingModel } from '../../../../domain/models/scheduling'

export interface LoadSchedulingByExpertIdRepository {
  loadByExpertId: (expertId: string) => Promise<SchedulingModel[]>
}
