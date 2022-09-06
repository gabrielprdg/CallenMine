import { mockAddSchedulingParams } from '../../../../domain/test/mockScheduling'
import { AddSchedulingRepository } from '../../../protocols/db/scheduling/addSchedulingRepository'
import { mockDbAddScheculingRepository } from '../../../test/mockDbScheduling'
import { DbAddScheduling } from './dbAddScheduling'
import mockdate from 'mockdate'

interface SutTypes {
  addSchedulingRepository: AddSchedulingRepository
  sut: DbAddScheduling
}

const makeSut = (): SutTypes => {
  const addSchedulingRepository = mockDbAddScheculingRepository()
  const sut = new DbAddScheduling(addSchedulingRepository)

  return {
    addSchedulingRepository,
    sut
  }
}
// criando um erro pra ser testado

export const throwError = (): never => {
  throw new Error()
}

describe('DbAddSchedule UseCase', () => {
  // testando caso de uso de adicionar agendamento
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })
  it('Should call AddSchedulingRepository with correct values', async () => {
    const { sut, addSchedulingRepository } = makeSut()
    const schedulingSpy = jest.spyOn(addSchedulingRepository, 'add')
    await sut.add(mockAddSchedulingParams())
    expect(schedulingSpy).toHaveBeenCalledWith(mockAddSchedulingParams())
  })

  it('Should throws if AddSchedulingRepository throws', async () => {
    const { sut, addSchedulingRepository } = makeSut()
    jest.spyOn(addSchedulingRepository, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddSchedulingParams())
    await expect(promise).rejects.toThrow()
  })
})
