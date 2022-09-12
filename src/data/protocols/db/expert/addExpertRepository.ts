import { AddExpertParams, ExpertId } from '../../../../domain/useCases/experts/addExpert/addExpert'

export interface AddExpertRepository {
  add: (addExpertParams: AddExpertParams) => Promise<ExpertId>
}