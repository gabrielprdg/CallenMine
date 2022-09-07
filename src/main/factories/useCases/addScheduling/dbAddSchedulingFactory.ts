import { DbAddScheduling } from '../../../../data/useCases/scheduling/addScheduling/dbAddScheduling'
import { AddScheduling } from '../../../../domain/useCases/scheduling/addScheduling/AddScheduling'
import { SchedulingMongoRepository } from '../../../../infra/db/mongoDb/scheduling/schedulingMongoRepository'

export const makeDbAddScheduling = (): AddScheduling => {
  const schedulingMongoRepository = new SchedulingMongoRepository()
  return new DbAddScheduling(schedulingMongoRepository)
}