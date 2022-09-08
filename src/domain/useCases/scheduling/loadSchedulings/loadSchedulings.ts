import { SchedulingModel } from '../../../models/scheduling'

export interface LoadSchedulings {
  load: () => Promise<SchedulingModel[]>
}