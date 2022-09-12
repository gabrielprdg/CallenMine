import LoadDatesOccupiedController from '../../../../../presentation/controllers/expert/loadDatesOcuppied/loadDatesOccupiedController'
import { Controller } from '../../../../../presentation/protocols/controller'
import { makeDbLoadDatesOccupied } from '../../../useCases/expert/loadDatesOccupied/dbLoadDatesOccupiedFactory'

export const makeLoadDatesOccupiedController = (): Controller => {
  const controller = new LoadDatesOccupiedController(makeDbLoadDatesOccupied())
  return controller
}