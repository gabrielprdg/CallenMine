import { SchedulingModel } from '../../../models/scheduling'

export interface LoadSchedulingById {
  loadById: (id: string) => Promise<SchedulingModel>
}