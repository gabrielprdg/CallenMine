import { AddSchedulesParams, SchedulesId } from '../../../../domain/useCases/schedules/addSchedules'

export interface AddSchedulesRepository {
  add: (addSchedulesParams: AddSchedulesParams[]) => Promise<void>
}