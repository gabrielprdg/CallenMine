import { DbAddExpert } from '../../../../../data/useCases/expert/addExpert/dbAddExpert'
import { DbAddSchedules } from '../../../../../data/useCases/schedules/addSchedules/dbAddSchedules'
import { AddExpert } from '../../../../../domain/useCases/experts/addExpert/addExpert'
import { AddSchedules } from '../../../../../domain/useCases/schedules/addSchedules'
import { ExpertMongoRepository } from '../../../../../infra/db/mongoDb/expert/expertMongoRepository'
import { SchedulesMongoRepository } from '../../../../../infra/db/mongoDb/schedules/schedulesMongoRepository'

export const makeDbAddExpert = (): AddExpert => {
  const expertMongoRepository = new ExpertMongoRepository()
  return new DbAddExpert(expertMongoRepository)
}