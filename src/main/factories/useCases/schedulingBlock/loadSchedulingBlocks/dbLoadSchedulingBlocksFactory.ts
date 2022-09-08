import { DbAddSchedulingBlock } from '../../../../../data/useCases/schedulingBlocks/addSchedulingBlock/dbAddSchedulingBlock'
import { DbLoadSchedulingBlocks } from '../../../../../data/useCases/schedulingBlocks/loadSchedulingBlocks/dbLoadSchedulingBlocks'
import { AddSchedulingBlock } from '../../../../../domain/useCases/schedulingBlock/addSchedulingBlock/addSchedulingBlock'
import { LoadSchedulingBlocks } from '../../../../../domain/useCases/schedulingBlock/loadSchedulingBlocks/loadSchedulingBlocks'
import { SchedulingBlockMongoRepository } from '../../../../../infra/db/mongoDb/schedulingBlock/schedulingBlockMongoRepository'

export const makeDbLoadSchedulingBlocks = (): LoadSchedulingBlocks => {
  //Repositorio que esta ligado o banco de dados
  const schedulingBlockMongoRepository = new SchedulingBlockMongoRepository()
  return new DbLoadSchedulingBlocks(schedulingBlockMongoRepository)
}