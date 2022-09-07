import { Request, Response, NextFunction } from 'express'

export const contentType = (request: Request, response: Response, next: NextFunction): void => {
  response.type('json')
  // next -> serve pra sair desse middleware e completar o ciclo completo de um requisição
  next()
}
