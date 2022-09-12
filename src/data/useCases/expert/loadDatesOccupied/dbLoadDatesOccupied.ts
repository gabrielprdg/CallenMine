import { DatesOccupied, LoadDatesOccupied } from '../../../../domain/useCases/experts/loadDatesOccupied/loadDatesOccupied'
import { LoadDatesOccupiedRepository } from '../../../protocols/db/expert/loadDatesOcuppiedRepository'

export class DbLoadDatesOccupied implements LoadDatesOccupied {
  private readonly loadDatesOccupiedRepository: LoadDatesOccupiedRepository

  constructor (loadDatesOccupiedRepository: LoadDatesOccupiedRepository) {
    this.loadDatesOccupiedRepository = loadDatesOccupiedRepository
  }

  async loadDates (expertId: string): Promise<DatesOccupied[]> {
    const dates = await this.loadDatesOccupiedRepository.loadDates(expertId)
    return dates
  }
}