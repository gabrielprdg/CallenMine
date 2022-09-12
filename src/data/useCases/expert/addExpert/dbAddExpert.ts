import { AddExpert, AddExpertParams } from '../../../../domain/useCases/experts/addExpert/addExpert'
import { AddExpertRepository } from '../../../protocols/db/expert/addExpertRepository'
import { ExpertId } from '../../../../domain/useCases/experts/addExpert/addExpert'

export class DbAddExpert implements AddExpert {
  private readonly addExpertRepository: AddExpertRepository
  constructor (addExpertRepository: AddExpertRepository) {
    this.addExpertRepository = addExpertRepository
  }

  async add (data: AddExpertParams): Promise<ExpertId> {
    const expertId = await this.addExpertRepository.add(data)
    return expertId
  }
}