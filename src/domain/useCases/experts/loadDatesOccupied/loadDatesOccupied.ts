export type DatesOccupied = {
  date: string,
  type: string, 
  message: string
}

export interface LoadDatesOccupied {
  loadDates: (id: string) => Promise<DatesOccupied[]> 
}