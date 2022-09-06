import { Validation } from '../protocols/validation'

export const mockValidation = (): Validation => {
  class ValidationStub implements Validation {
    // Retornamos um erro nesse metodo pois se ocorrer tudo certo com a validacao nao queremos fazer nada, mas caso der erro devemos retornar esse erro!
    validate (input: any): Error {
      return null as any
    }
  }
  return new ValidationStub()
}
