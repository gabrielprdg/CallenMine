import { ServerError } from '../errors/serverError'
import { HttpResponse } from '../protocols/http'

// helpers de requisição em caso de falhas

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const notFound = (error?: Error): HttpResponse => ({
  statusCode: 404,
  body: error
})

export const timeOut = (): HttpResponse => ({
  statusCode: 408,
  body: null
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

// helpers de requisição em caso de sucesso

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 200,
  body: null
})
