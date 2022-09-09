import { SchedulingModel } from '../../../models/scheduling'

export interface LoadSchedulingByExpertId {
  loadByExpertId: (expertId: string) => Promise<SchedulingModel[]>
}