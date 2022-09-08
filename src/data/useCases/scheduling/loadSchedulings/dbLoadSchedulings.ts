import { SchedulesModel } from '../../../../domain/models/schedules'
import { SchedulingModel } from '../../../../domain/models/scheduling'
import { LoadSchedulings } from '../../../../domain/useCases/scheduling/loadSchedulings/loadSchedulings'
import { LoadSchedulingsRepository } from '../../../protocols/db/scheduling/loadSchedulingsRepository'

export class DbLoadSchedulings implements LoadSchedulings {
  private readonly loadSchedulingsRepository: LoadSchedulingsRepository
  constructor (loadSchedulingsRepository: LoadSchedulingsRepository) {
    this.loadSchedulingsRepository = loadSchedulingsRepository
  }

  async load (): Promise<SchedulingModel[]> {
    const schedulings = await this.loadSchedulingsRepository.load()
    return schedulings
  }
}