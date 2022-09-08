import { DbAddScheduling } from '../../../../../data/useCases/scheduling/addScheduling/dbAddScheduling'
import { DbLoadSchedulings } from '../../../../../data/useCases/scheduling/loadSchedulings/dbLoadSchedulings'
import { AddScheduling } from '../../../../../domain/useCases/scheduling/addScheduling/addScheduling'
import { LoadSchedulings } from '../../../../../domain/useCases/scheduling/loadSchedulings/loadSchedulings'
import { SchedulingMongoRepository } from '../../../../../infra/db/mongoDb/scheduling/schedulingMongoRepository'

export const makeDbLoadSchedulings = (): LoadSchedulings => {
  const schedulingMongoRepository = new SchedulingMongoRepository()
  return new DbLoadSchedulings(schedulingMongoRepository)
}