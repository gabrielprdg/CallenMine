import { SchedulingModel } from '../../../../domain/models/scheduling'

export interface LoadSchedulingsRepository {
  load: () => Promise<SchedulingModel[]>
}