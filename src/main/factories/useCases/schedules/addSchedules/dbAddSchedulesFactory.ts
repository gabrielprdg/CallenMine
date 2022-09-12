import { DbAddSchedules } from '../../../../../data/useCases/schedules/addSchedules/dbAddSchedules'
import { AddSchedules } from '../../../../../domain/useCases/schedules/addSchedules'
import { SchedulesMongoRepository } from '../../../../../infra/db/mongoDb/schedules/schedulesMongoRepository'

export const makeDbAddSchedules = (): AddSchedules => {
  const schedulesMongoRepository = new SchedulesMongoRepository()
  return new DbAddSchedules(schedulesMongoRepository)
}