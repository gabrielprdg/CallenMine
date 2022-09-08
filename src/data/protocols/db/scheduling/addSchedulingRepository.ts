import { SchedulingModel } from '../../../../domain/models/scheduling'
import { AddSchedulingParams, SchedulingId } from '../../../../domain/useCases/scheduling/addScheduling/addScheduling'

export interface AddSchedulingRepository {
  add: (scheduleData: AddSchedulingParams) => Promise<SchedulingId>
}
