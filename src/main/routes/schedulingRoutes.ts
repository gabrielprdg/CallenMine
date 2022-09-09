import { Router } from 'express'
import { adapRoute } from '../adapters/expressRouteAdapter'
import { makeAddSchedulingController } from '../factories/controllers/scheduling/addScheduling/addSchedulingControllerFactory'
import { makeLoadSchedulingsController } from '../factories/controllers/scheduling/loadSchedulings/loadSchedulingsControllerFactory'

export default (router: Router): void => {
  router.post('/expert/scheduling', adapRoute(makeAddSchedulingController()))
  router.get('/scheduling', adapRoute(makeLoadSchedulingsController()))
}
