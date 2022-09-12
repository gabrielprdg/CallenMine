export class HolidayFoundedError extends Error {
  constructor (paramName: string) {
    super(`${paramName} founded`)
    this.name = 'Holiday Error'
  }
}