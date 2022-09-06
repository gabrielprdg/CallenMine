import { SchedulingModel } from '../models/scheduling'
import { AddSchedulingParams } from '../useCases/scheduling/addScheduling/AddScheduling'

export const mockSchedulingModel = (): SchedulingModel => {
  return {
    id: 'any_id',
    customer: {
      id: 'any_id',
      name: 'any_name'
    },
    note: 'any_note',
    schedules: [{
      id: 'any_id',
      scheduling_id: 'any_id',
      date: new Date(),
      experts: [{
        id: 'any_id',
        name: 'any_name'
      }]
    }]
  }
}

export const mockAddSchedulingParams = (): AddSchedulingParams => ({
  customer: {
    id: 'any_id',
    name: 'any_name'
  },
  note: 'any_id',
  schedules: [{
    scheduling_id: 'any_id',
    date: new Date(),
    experts: [{
      id: 'any_id',
      name: 'any_name'
    }]
  }]
})
