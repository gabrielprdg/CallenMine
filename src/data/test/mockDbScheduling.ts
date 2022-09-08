import { SchedulingModel } from '../../domain/models/scheduling'
import { mockSchedulingModel } from '../../domain/test/mockScheduling'
import { AddSchedulingParams } from '../../domain/useCases/scheduling/addScheduling/addScheduling'
import { AddSchedulingRepository } from '../protocols/db/scheduling/addSchedulingRepository'

export const mockDbAddScheculingRepository = (): AddSchedulingRepository => {
  // Stub é um nome designado para um dublê de teste
  class AddScheculingRepositoryStub implements AddSchedulingRepository {
    async add (data: AddSchedulingParams): Promise<SchedulingModel> {
      return await Promise.resolve(mockSchedulingModel())
    }
  }

  return new AddScheculingRepositoryStub()
}
