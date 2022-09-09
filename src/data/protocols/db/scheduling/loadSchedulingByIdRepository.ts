import { SchedulingModel } from '../../../../domain/models/scheduling'

export interface LoadSchedulingByIdRepository {
  loadById: (id: string) => Promise<SchedulingModel>
}