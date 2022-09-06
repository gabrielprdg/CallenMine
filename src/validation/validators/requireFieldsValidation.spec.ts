import { MissingParamError } from '../../presentation/errors/missingParamError'
import { RequiredFieldsValidation } from './requireFieldsValidation'

const makeSut = (): RequiredFieldsValidation => {
  // testando se classe de validação esta funcionando conforme esperado
  return new RequiredFieldsValidation('field')
}

describe('Required Field Validation', () => {
  // testando a validação de campos
  it('Should return a Missing Param Error if validation fails', () => {
    const sut = makeSut()
    const result = sut.validate({
      any_field: 'any_result'
    })
    expect(result).toEqual(new MissingParamError('field'))
  })

  it('Should return nothing if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_field'
    })
    expect(error).toBeFalsy()
  })
})
