import { Request, Response, NextFunction } from 'express'

export const cors = (request: Request, response: Response, next: NextFunction): void => {
  response.set('access-control-allow-origin', '*')
  response.set('access-control-allow-headers', '*')
  response.set('access-control-allow-methods', '*')
  // next -> serve pra sair desse middleware e completar o ciclo completo de um requisição
  next()
}
