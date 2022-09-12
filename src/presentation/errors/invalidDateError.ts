export class InvalidDateError extends Error {
  constructor (paramName: string) {
    super(`${paramName} is very far`)
    this.name = 'Date Error'
  }
}