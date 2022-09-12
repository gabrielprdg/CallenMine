import LoadFreeExpertsController from '../../../../../presentation/controllers/expert/loadFreeExperts/loadFreeExpertsController'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbLoadFreeExperts } from '../../../useCases/expert/loadFreeExperts/dbLoadFreeExpertsFactory'

export const makeLoadFreeExpertsController = (): Controller => {
  const controller = new LoadFreeExpertsController(makeDbLoadFreeExperts())
  return controller
}