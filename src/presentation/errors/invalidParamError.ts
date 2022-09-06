export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Invalid Param ${paramName}`)
    this.name = 'InvalidParamError'
  }
}

// Classe pai  = Error;
// propriedade name é de Error e so pode usar ela depois do metodo super
