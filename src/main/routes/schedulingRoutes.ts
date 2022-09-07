import { Router } from 'express'
import { adapRoute } from '../adapters/expressRouteAdapter'
import { makeAddSchedulingController } from '../factories/controllers/scheduling/addScheduling/addSchedulingControllerFactory'

export default (router: Router): void => {
  router.post('/expert/scheduling', adapRoute(makeAddSchedulingController()))
}
