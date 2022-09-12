import { Request, RequestHandler, Response } from 'express'
import { Controller } from '../../presentation/protocols/controller'
import { HttpRequest } from '../../presentation/protocols/http'

// RequestHandler é uma tipagem que irá garantir que a requisicao
// seja feita de acordo com os padroes do express


//adapRoute servirá como adaptador da rota, onde irá pegar o controller requerido
// e assim completar o ciclo da requisicão com o response
export const adapRoute = (controller: Controller): RequestHandler => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      query: request.query,
      method: request.method,
      body: request.body,
      params: request.params,
      schedulingId: request.schedulingId
    }

    console.log(httpRequest)

    const httpResponse = await controller.handle(httpRequest)
    console.log(httpResponse)
    console.log(httpResponse.statusCode)
    
    if(httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return response.status(httpResponse.statusCode).json(httpResponse.body)
    }else {
      return response.status(httpResponse.statusCode).json({error : httpResponse.body.message})
    }
  }
}