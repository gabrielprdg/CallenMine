import { ExpertModel } from '../../../models/expert'

export type ExpertId = Pick<ExpertModel, 'id'>
export type AddExpertParams = Omit<ExpertModel, 'id'>

export interface AddExpert {
  add: (addExpertParams: AddExpertParams) => Promise<ExpertId>
}