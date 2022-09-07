import { Validation } from '../../presentation/protocols/validation'

export const mockValidation = (): Validation => {
  class validationCompositeStub implements Validation {
    validate(input: any): Error | null {
      return null
    }
  }

  return new validationCompositeStub()
}