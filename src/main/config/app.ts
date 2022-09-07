import express from 'express'
import dotenv from 'dotenv'
import setupMiddlewares from './middlewares'

dotenv.config()
const app = express()
setupMiddlewares(app)
export default app
