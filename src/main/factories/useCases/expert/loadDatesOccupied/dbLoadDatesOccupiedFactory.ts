import { DbLoadDatesOccupied } from '../../../../../data/useCases/expert/loadDatesOccupied/dbLoadDatesOccupied'
import { LoadDatesOccupied } from '../../../../../domain/useCases/experts/loadDatesOccupied/loadDatesOccupied'
import { ExpertMongoRepository } from '../../../../../infra/db/mongoDb/expert/expertMongoRepository'

export const makeDbLoadDatesOccupied = (): LoadDatesOccupied => {
  const expertMongoRepository = new ExpertMongoRepository()
  return new DbLoadDatesOccupied(expertMongoRepository)
}