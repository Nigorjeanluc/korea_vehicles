import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import session from 'express-session'
import path from 'path'

import allRoutes from './routes';

dotenv.config()
const app = express()

app.use(cors({
  origin: '*'
}))
app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
  res.sendFile('./client/index.html', { root: '.' })
})

app.use('/api', allRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


