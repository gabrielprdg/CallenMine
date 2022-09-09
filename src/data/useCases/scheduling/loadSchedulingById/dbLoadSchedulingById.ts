import { SchedulingModel } from '../../../../domain/models/scheduling'
import { LoadSchedulingById } from '../../../../domain/useCases/scheduling/loadSchedulingById/loadSchedulingById'
import { LoadSchedulingByIdRepository } from '../../../protocols/db/scheduling/loadSchedulingByIdRepository'

export class DbLoadSchedulingById implements LoadSchedulingById {
  private readonly loadSchedulingByIdRepository: LoadSchedulingByIdRepository

  constructor (loadSchedulingByIdRepository: LoadSchedulingByIdRepository) {
    this.loadSchedulingByIdRepository = loadSchedulingByIdRepository
  }

  async loadById (id: string): Promise<SchedulingModel> {
    const scheduling = await this.loadSchedulingByIdRepository.loadById(id)
    return scheduling
  }
}