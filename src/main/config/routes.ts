import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use(router)
  fg.sync('**/src/main/routes/**Routes.ts').map(async file => {
    // pegando cada arquivo de rota e passando o Router do express como parametro pra cada arquivo
    (await import(`../../../${file}`)).default(router)
  })
}
