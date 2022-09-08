import { SchedulingModel } from '../../../../domain/models/scheduling'
import { AddScheduling, AddSchedulingParams } from '../../../../domain/useCases/scheduling/addScheduling/addScheduling'
import { AddSchedulingRepository } from '../../../protocols/db/scheduling/addSchedulingRepository'

export class DbAddScheduling implements AddScheduling {
  private readonly addSchedulingRepository: AddSchedulingRepository
  constructor (addSchedulingRepository: AddSchedulingRepository) {
    this.addSchedulingRepository = addSchedulingRepository
  }

  async add (data: AddSchedulingParams): Promise<SchedulingModel> {
    const scheduling = await this.addSchedulingRepository.add(data)
    return scheduling
  }
}
