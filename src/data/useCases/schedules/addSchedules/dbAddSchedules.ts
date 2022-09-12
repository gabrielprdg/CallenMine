import { ExpertId } from '../../../../domain/useCases/experts/addExpert/addExpert'
import { AddSchedules, AddSchedulesParams } from '../../../../domain/useCases/schedules/addSchedules'
import { AddSchedulesRepository } from '../../../protocols/db/schedules/addSchedulesRepository'

export class DbAddSchedules implements AddSchedules {
  private readonly addSchedulesRepository: AddSchedulesRepository
  constructor (addSchedulesRepository: AddSchedulesRepository) {
    this.addSchedulesRepository = addSchedulesRepository
  }

  async add (data: AddSchedulesParams[]): Promise<void> {
    await this.addSchedulesRepository.add(data)
  }
}