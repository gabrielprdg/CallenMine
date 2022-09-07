import { Validation } from '../../presentation/protocols/validation'

export class ValidationComposite implements Validation {
  private readonly validations: Validation[]

  constructor (validations: Validation[]) {
    this.validations = validations
  } 

  validate (input: any): Error | undefined {
    for (const validation of this.validations) {
      const err = validation.validate(input)
      if (err) {
        return err
      }
    }
  }
}
