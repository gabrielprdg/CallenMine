import { Validation } from '../../../../../presentation/protocols/validation'
import { RequiredFieldsValidation } from '../../../../../validation/validators/requiredFieldsValidation'
import { ValidationComposite } from '../../../../../validation/validators/validationComposite'
import { makeAddSchedulingValidation } from './addSchedulingValidationFactory'

jest.mock('@/validation/validators/validation-composite')

describe('AddSurveyValidation Factory', () => {
  it('Should call ValidationComposite with all validations', () => {
    makeAddSchedulingValidation()
    const validations: Validation[] = []
    for (const field of ['customer', 'note', 'schedules']) {
      validations.push(new RequiredFieldsValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})