export type AddScheduleBlockParams = {
  start: string
  end: string
  note: string
}

export interface AddSchedulingBlock {
  addSchedulingBlock: (addScheduleBlockParams: AddScheduleBlockParams) => Promise<void> 
}