import { Collection } from 'mongodb'
import { mongoHelper } from '../helper/mongoHelper'
import { SchedulingMongoRepository } from './schedulingMongoRepository'

const makeSut = (): SchedulingMongoRepository => {
  return new SchedulingMongoRepository()
}

let schedulingCollection: Collection

describe('Scheduling Mongo Respository', () => {
  // Abrindo conexao com o mongodb em memoria antes dos testes
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_CONNECTION_URL as string)
  })

  afterAll(async () => {
    await mongoHelper.disconnect()
  })

  beforeEach(async () => {
    schedulingCollection = await mongoHelper.getCollection('scheduling')
    await schedulingCollection.deleteMany({})
  })

  describe('add()', () => {
    test('Should add a schedule on success', async () => {
      const sut = makeSut()
      await sut.add({
        customer: {
          id: 'any_id',
          name: 'any_name'
        },
        note: 'any_note',
        schedules: [{
          scheduling_id: 'any_id',
          date: new Date(),
          experts: [{
            id: 'any_id',
            name: 'any_name'
          }]
        }]
      })
      const scheduling = await schedulingCollection.findOne({ note: 'any_note' })
      expect(scheduling).toBeTruthy()
    })
  })
})
