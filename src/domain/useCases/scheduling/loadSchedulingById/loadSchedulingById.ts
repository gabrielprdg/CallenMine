import { SchedulingModel } from '../../../models/scheduling'

export interface LoadSchedulingById {
  loadSchedulingById: (id: string) => Promise<SchedulingModel>
}