import express from 'express'
import dotenv from 'dotenv'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

dotenv.config()
const app = express()
setupMiddlewares(app)
setupRoutes(app)
export default app
