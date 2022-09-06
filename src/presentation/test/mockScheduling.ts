import { SchedulingModel } from '../../domain/models/scheduling'
import { mockSchedulingModel } from '../../domain/test/mockScheduling'
import { AddScheduling, AddSchedulingParams } from '../../domain/useCases/scheduling/addScheduling/AddScheduling'

export const mockAddScheduling = (): AddScheduling => {
  class AddSchedulingStub implements AddScheduling {
    async add (data: AddSchedulingParams): Promise<SchedulingModel> {
      return await Promise.resolve(mockSchedulingModel())
    }
  }

  return new AddSchedulingStub()
}
