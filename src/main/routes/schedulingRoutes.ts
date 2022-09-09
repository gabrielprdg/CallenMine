import { Router } from 'express'
import { adapRoute } from '../adapters/expressRouteAdapter'
import { makeAddSchedulingController } from '../factories/controllers/scheduling/addScheduling/addSchedulingControllerFactory'
import { makeLoadSchedulingByExpertIdController } from '../factories/controllers/scheduling/loadSchedulingByExpertId/loadSchedulingByExpertIdControllerFactory'
import { makeLoadSchedulingByIdController } from '../factories/controllers/scheduling/loadSchedulingById/loadSchedulingByIdControllerFactory'
import { makeLoadSchedulingsController } from '../factories/controllers/scheduling/loadSchedulings/loadSchedulingsControllerFactory'

export default (router: Router): void => {
  router.post('/expert/scheduling', adapRoute(makeAddSchedulingController()))
  router.get('/scheduling', adapRoute(makeLoadSchedulingsController()))
  router.get('/scheduling/:scheduling_id', adapRoute(makeLoadSchedulingByIdController()))
  router.get('/expert/scheduling/:expert_id', adapRoute(makeLoadSchedulingByExpertIdController()))
}
