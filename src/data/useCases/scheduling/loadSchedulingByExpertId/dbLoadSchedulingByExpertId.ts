import { SchedulingModel } from '../../../../domain/models/scheduling'
import { LoadSchedulingByExpertId } from '../../../../domain/useCases/scheduling/loadSchedulingByExpertId/loadSchedulingByExpertId'
import { LoadSchedulingByExpertIdRepository } from '../../../protocols/db/scheduling/loadSchedulingByExertIdRepository'

export class DbLoadSchedulingByExpertId implements LoadSchedulingByExpertId {
  private readonly loadSchedulingByExpertIdRepository: LoadSchedulingByExpertIdRepository

  constructor (loadSchedulingByExpertIdRepository: LoadSchedulingByExpertIdRepository) {
    this.loadSchedulingByExpertIdRepository = loadSchedulingByExpertIdRepository
  }

  async loadByExpertId (expertId: string): Promise<SchedulingModel[]> {
    const scheduling = await this.loadSchedulingByExpertIdRepository.loadByExpertId(expertId)
    return scheduling
  }
}