import { ExpertModel } from '../../../../domain/models/expert'
import { LoadFreeExperts } from '../../../../domain/useCases/experts/loadFreeExperts/loadFreeExperts'
import { LoadFreeExpertsRepository } from '../../../protocols/db/expert/loadFreeExperts'

export class DbLoadFreeExperts implements LoadFreeExperts {
  private readonly loadFreeExpertsRepository: LoadFreeExpertsRepository

  constructor (loadFreeExpertsRepository: LoadFreeExpertsRepository) {
    this.loadFreeExpertsRepository = loadFreeExpertsRepository
  }

  async loadByDate (date: Date): Promise<ExpertModel[]> {
    const experts = await this.loadFreeExpertsRepository.loadByDate(date)
    return experts
  }
}