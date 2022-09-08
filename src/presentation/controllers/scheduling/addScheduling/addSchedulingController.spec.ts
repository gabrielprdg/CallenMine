import { AddScheduling } from '../../../../domain/useCases/scheduling/addScheduling/addScheduling'
import { badRequest } from '../../../helpers/httpHelper'
import { HttpRequest } from '../../../protocols/http'
import { Validation } from '../../../protocols/validation'
import { mockAddScheduling } from '../../../test/mockScheduling'
import { mockValidation } from '../../../test/mockValidation'
import AddSchedulingController from './addSchedulingController'

const makeFakeRequest = (): HttpRequest => ({
  body: {
    customer: {
      id: 'any_customer_id',
      name: 'any_customer_name'
    },
    note: 'any_note',
    schedules: [{
      id: 'any_id',
      scheduling_id: 'any_scheduling_id',
      date: new Date(),
      experts: [{
        id: 'any_expert_id',
        name: 'any_expert_name'
      }]
    }]
  },
  method: 'POST'
})

interface SutTypes {
  validationStub: Validation
  addSchedulingStub: AddScheduling
  sut: AddSchedulingController
}

const makeSut = (): SutTypes => {
  const validationStub = mockValidation()
  const addSchedulingStub = mockAddScheduling()
  const sut = new AddSchedulingController(validationStub, addSchedulingStub)

  return {
    validationStub,
    addSchedulingStub,
    sut
  }
}

describe('AddSCheduling Controller', () => {
  it('Should return 200 if insertion is done correctly', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse.statusCode).toBe(200)
  })

  it('Should return 400 if Validation fails', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  it('Should call Validation with correct values ', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  it('Should return 408 if the request type is not /POST', async () => {
    const { sut } = makeSut()
    const httpRequest = makeFakeRequest()
    httpRequest.method = 'GET'
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(408)
  })
})
