export type DatesOccupied = {
  date: string,
  type: string, 
  message: string
}

export interface LoadDatesOccupied {
  loadDatesByExpertId: (id: string) => Promise<DatesOccupied[]> 
}