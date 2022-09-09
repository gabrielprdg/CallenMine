import LoadSchedulingByExpertIdController from '../../../../../presentation/controllers/scheduling/loadSchedulingByExpertId/loadSchedulingByExpertId'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbLoadSchedulingByExpertId } from '../../../useCases/scheduling/loadSchedulingByExpertId/dbLoadSchedulingByExpertIdFactory'

export const makeLoadSchedulingByExpertIdController = (): Controller => {
  const controller = new LoadSchedulingByExpertIdController(makeDbLoadSchedulingByExpertId())
  return controller
}