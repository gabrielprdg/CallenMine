import { AddSchedulesRepository } from '../../../../data/protocols/db/schedules/addSchedulesRepository'
import { AddExpertParams, ExpertId } from '../../../../domain/useCases/experts/addExpert/addExpert'
import { AddSchedulesParams } from '../../../../domain/useCases/schedules/addSchedules'
import { mongoHelper } from '../helper/mongoHelper'

export class SchedulesMongoRepository implements AddSchedulesRepository {
  
  async add (addSchedulesParams: AddSchedulesParams[]): Promise<void> {
    const schedulesColLection = await mongoHelper.getCollection('schedules')
    await schedulesColLection.insertMany(addSchedulesParams)
  }

}