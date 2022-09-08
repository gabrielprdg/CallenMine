import { Router } from 'express'
import { adapRoute } from '../adapters/expressRouteAdapter'
import { makeAddSchedulingBlockController } from '../factories/controllers/schedulingBlock/addSchedulingBlock/addSchedulingBlockControllerFactory'
import { makeLoadSchedulingBlocksController } from '../factories/controllers/schedulingBlock/loadSchedulingBlocks/loadSchedulingBlocksControllerFactory'

export default (router: Router): void => {
  router.post('/expert/scheduling_block', adapRoute(makeAddSchedulingBlockController()))
  router.get('/expert/scheduling_block', adapRoute(makeLoadSchedulingBlocksController()))
}
 