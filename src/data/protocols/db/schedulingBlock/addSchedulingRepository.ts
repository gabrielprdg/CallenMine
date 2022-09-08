import { SchedulingBlockId } from "../../../../domain/useCases/schedulingBlock/addSchedulingBlock/addSchedulingBlock"

export type AddSchedulingBlockParams = {
  start: string
  end: string
  note: string
}

export interface AddSchedulingBlockRepository {
  add: (scheduleBlockData: AddSchedulingBlockParams) => Promise<SchedulingBlockId>
}
