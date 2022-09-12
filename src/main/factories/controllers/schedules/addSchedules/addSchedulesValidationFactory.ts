import { Validation } from '../../../../../presentation/protocols/validation'
import { RequiredFieldsValidation } from '../../../../../validation/validators/requiredFieldsValidation'
import { ValidationComposite } from '../../../../../validation/validators/validationComposite'

export const makeAddSchedulesValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['date', 'expertsId']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}