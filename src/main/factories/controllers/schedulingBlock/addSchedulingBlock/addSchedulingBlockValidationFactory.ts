import { Validation } from '../../../../../presentation/protocols/validation'
import { RequiredFieldsValidation } from '../../../../../validation/validators/requiredFieldsValidation'
import { ValidationComposite } from '../../../../../validation/validators/validationComposite'

export const makeAddSchedulingBlockValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['start', 'end', 'note']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}