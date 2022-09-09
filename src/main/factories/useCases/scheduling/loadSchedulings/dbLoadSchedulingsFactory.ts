import { DbLoadSchedulings } from '../../../../../data/useCases/scheduling/loadSchedulings/dbLoadSchedulings'
import { LoadSchedulings } from '../../../../../domain/useCases/scheduling/loadSchedulings/loadSchedulings'
import { SchedulingMongoRepository } from '../../../../../infra/db/mongoDb/scheduling/schedulingMongoRepository'

export const makeDbLoadSchedulings = (): LoadSchedulings => {
  const schedulingMongoRepository = new SchedulingMongoRepository()
  return new DbLoadSchedulings(schedulingMongoRepository)
}