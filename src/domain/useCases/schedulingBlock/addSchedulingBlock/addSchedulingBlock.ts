import { SchedulingBlockModel } from '../../../models/schedulingBlock'

//tipo que retornara somente o Id de bloqueio
export type SchedulingBlockId = Pick<SchedulingBlockModel, 'id'>

export type AddScheduleBlockParams = {
  start: string
  end: string
  note: string
}

export interface AddSchedulingBlock {
  add: (addScheduleBlockParams: AddScheduleBlockParams) => Promise<SchedulingBlockId> 
}