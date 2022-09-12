import { Validation } from '../../../../../presentation/protocols/validation'
import { RequiredFieldsValidation } from '../../../../../validation/validators/requiredFieldsValidation'
import { ValidationComposite } from '../../../../../validation/validators/validationComposite'

export const makeAddExpertValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}