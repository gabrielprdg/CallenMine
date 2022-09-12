import { Router } from 'express'
import { adapRoute } from '../adapters/expressRouteAdapter'
import { makeAddExpertController } from '../factories/controllers/expert/addExpert/addExpertControllerFactory'
import { makeLoadDatesOccupiedController } from '../factories/controllers/expert/loadDatesOcuppied/loadDatesOcuppiedController'
import { makeLoadFreeExpertsController } from '../factories/controllers/expert/loadFreeExperts/loadFreeExpertsController'

export default (router: Router): void => {
  router.post('/expert', adapRoute(makeAddExpertController()))
  router.get('/expert/occupied/:expertId', adapRoute(makeLoadDatesOccupiedController()))
  router.get('/expert/free', adapRoute(makeLoadFreeExpertsController()))
}
