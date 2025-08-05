import express from 'express'
import routes from './routes'
import dotenv from 'dotenv'
import { AppDataSource } from './data-source'
import cors from 'cors'
import path from 'path'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(cors({
  origin: '*'
}))

app.use(express.static('public'));
app.use('/api', routes)

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source initialized')
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)

    })
  })
  .catch((err) => {
    console.error('Error initializing data source', err)
  })