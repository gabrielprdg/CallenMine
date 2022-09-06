import { SchedulingModel } from '../../../../domain/models/scheduling'
import { AddSchedulingParams } from '../../../../domain/useCases/scheduling/addScheduling/AddScheduling'

export interface AddSchedulingRepository {
  add: (scheduleData: AddSchedulingParams) => Promise<SchedulingModel>
}
