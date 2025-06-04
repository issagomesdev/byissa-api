import express from 'express'
import routes from './routes'
import dotenv from 'dotenv'
import { AppDataSource } from './data-source'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(cors({
  origin: '*'
}))
app.use('/api', routes)

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source initialized')
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000')
    })
  })
  .catch((err) => {
    console.error('Error initializing data source', err)
  })