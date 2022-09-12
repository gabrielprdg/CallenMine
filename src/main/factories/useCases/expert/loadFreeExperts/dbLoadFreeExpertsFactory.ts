import { DbLoadFreeExperts } from '../../../../../data/useCases/expert/loadFreeExperts/dbLoadFreeExperts'
import { LoadFreeExperts } from '../../../../../domain/useCases/experts/loadFreeExperts/loadFreeExperts'
import { ExpertMongoRepository } from '../../../../../infra/db/mongoDb/expert/expertMongoRepository'

export const makeDbLoadFreeExperts = (): LoadFreeExperts => {
  const expertMongoRepository = new ExpertMongoRepository()
  return new DbLoadFreeExperts(expertMongoRepository)
}