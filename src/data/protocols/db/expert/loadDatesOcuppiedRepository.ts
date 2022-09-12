import { DatesOccupied } from '../../../../domain/useCases/experts/loadDatesOccupied/loadDatesOccupied'

export interface LoadDatesOccupiedRepository {
  loadDates(expertId: string): Promise<DatesOccupied[]>
}
