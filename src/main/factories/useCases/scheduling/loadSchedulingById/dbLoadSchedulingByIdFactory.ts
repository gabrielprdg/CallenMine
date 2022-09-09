import { DbLoadSchedulingById } from '../../../../../data/useCases/scheduling/loadSchedulingById/dbLoadSchedulingById'
import { LoadSchedulingById } from '../../../../../domain/useCases/scheduling/loadSchedulingById/loadSchedulingById'
import { SchedulingMongoRepository } from '../../../../../infra/db/mongoDb/scheduling/schedulingMongoRepository'

export const makeDbLoadSchedulingById = (): LoadSchedulingById => {
  const schedulingMongoRepository = new SchedulingMongoRepository()
  return new DbLoadSchedulingById(schedulingMongoRepository)
}