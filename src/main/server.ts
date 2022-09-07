import { mongoHelper } from '../infra/db/mongoDb/helper/mongoHelper'
import dotenv from 'dotenv'
dotenv.config()

console.log('re', process.env.MONGO_CONNECTION_URL)
mongoHelper.connect(process.env.MONGO_CONNECTION_URL as string)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(process.env.PORT, () => {
      console.log(`Running at ${process.env.PORT}`)
    })    
  })

