export class notFoundError extends Error {
  constructor (paramName: string) {
    super(`${paramName} not Found`)
    this.name = 'Not Found Error'
  }
}