// este diretorio ficará responsável pelas interfaces que estarao ligadas a camada de presentation
export interface HttpRequest {
  body?: any
  method?: any
  headers?: any
  params?: any
  schedulingId?: any
  query?: any
}

export interface HttpResponse {
  statusCode: number
  body: any
}
