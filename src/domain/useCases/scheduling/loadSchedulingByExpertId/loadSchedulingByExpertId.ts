import { SchedulingModel } from '../../../models/scheduling'

export interface LoadSchedulingByExpertId {
  loadSchedulingByExpertId: () => Promise<SchedulingModel>
}