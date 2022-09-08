import { DbAddSchedulingBlock } from '../../../../../data/useCases/schedulingBlocks/addSchedulingBlock/dbAddSchedulingBlock'
import { AddSchedulingBlock } from '../../../../../domain/useCases/schedulingBlock/addSchedulingBlock/addSchedulingBlock'
import { SchedulingBlockMongoRepository } from '../../../../../infra/db/mongoDb/schedulingBlock/schedulingBlockMongoRepository'

export const makeDbAddSchedulingBlock = (): AddSchedulingBlock => {
  //Repositorio que esta ligado o banco de dados
  const schedulingBlockMongoRepository = new SchedulingBlockMongoRepository()
  return new DbAddSchedulingBlock(schedulingBlockMongoRepository)
}