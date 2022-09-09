import { DbLoadSchedulingByExpertId } from '../../../../../data/useCases/scheduling/loadSchedulingByExpertId/dbLoadSchedulingByExpertId'
import { LoadSchedulingByExpertId } from '../../../../../domain/useCases/scheduling/loadSchedulingByExpertId/loadSchedulingByExpertId'
import { SchedulingMongoRepository } from '../../../../../infra/db/mongoDb/scheduling/schedulingMongoRepository'

export const makeDbLoadSchedulingByExpertId = (): LoadSchedulingByExpertId => {
  const schedulingMongoRepository = new SchedulingMongoRepository()
  return new DbLoadSchedulingByExpertId(schedulingMongoRepository)
}