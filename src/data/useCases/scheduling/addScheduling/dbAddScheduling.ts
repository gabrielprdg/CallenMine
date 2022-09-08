import { SchedulingModel } from '../../../../domain/models/scheduling'
import { AddScheduling, AddSchedulingParams, SchedulingId } from '../../../../domain/useCases/scheduling/addScheduling/addScheduling'
import { AddSchedulingRepository } from '../../../protocols/db/scheduling/addSchedulingRepository'

export class DbAddScheduling implements AddScheduling {
  private readonly addSchedulingRepository: AddSchedulingRepository
  constructor (addSchedulingRepository: AddSchedulingRepository) {
    this.addSchedulingRepository = addSchedulingRepository
  }

  async add (data: AddSchedulingParams): Promise<SchedulingId> {
    const schedulingId = await this.addSchedulingRepository.add(data)
    return schedulingId
  }
}
