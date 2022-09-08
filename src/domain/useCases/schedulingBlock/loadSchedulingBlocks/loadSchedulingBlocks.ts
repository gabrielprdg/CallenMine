import { SchedulingBlockModel } from "../../../models/schedulingBlock";

export interface LoadSchedulingBlocks {
  load: () =>  Promise<SchedulingBlockModel[]>
}