import { MissingParamError } from '../../presentation/errors/missingParamError'
import { Validation } from '../../presentation/protocols/validation'
import { mockValidation } from '../../presentation/test/mockValidation'
import { ValidationComposite } from './validationComposite'

type SutTypes = {
  // dubles de teste simulando multiplas validações
  validationsStub: Validation[]
  sut: ValidationComposite
}

const makeSut = (): SutTypes => {
  const validationsStub = [mockValidation(), mockValidation()]
  const sut = new ValidationComposite(validationsStub)
  return {
    validationsStub,
    sut
  }
}

describe('Validation Composite', () => {
  it('Should return an error if validation fails', () => {
    const { sut, validationsStub } = makeSut()
    jest.spyOn(validationsStub[1], 'validate').mockReturnValueOnce(new MissingParamError('field'))
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  it('Should return the first error if a lot of validation fails', () => {
    const { sut, validationsStub } = makeSut()
    jest.spyOn(validationsStub[0], 'validate').mockReturnValueOnce(new Error())
    jest.spyOn(validationsStub[1], 'validate').mockReturnValueOnce(new MissingParamError('field'))
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new Error())
  })

  it('Should not return if succeeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({ field: 'any_value' })
    expect(error).toBeFalsy()
  })
})