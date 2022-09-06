import { HttpRequest } from '../../../protocols/http'
import AddScheduleController from './addScheduleController'

const makeFakeRequest = (): HttpRequest => ({
  body: {

  }
})

interface SutTypes {
  validationStub: Validation
  addScheduleStub: AddSchedule
  sut: AddScheduleController
}

const makeSut = (): SutTypes => {
  const validationStub = mockValidation()
  const addScheduleStub = mockAddSchedule()
  const sut = new AddScheduleController(validationStub, addScheduleStub)

  return {
    validationStub,
    addScheduleStub,
    sut
  }
}

describe('AddSChedule Controller', () => {
  it('Should return 200 if insertion is done correctly', () => {
    const { sut } = makeSut()
    const httpResponse = sut.handle(makeFakeRequest())
    expect(httpResponse).toBe(200)
  })

  it('Should return 400 if Validation fails', () => {
    
  })
})
