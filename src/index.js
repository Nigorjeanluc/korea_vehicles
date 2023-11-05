import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import session from 'express-session'

import allRoutes from './routes';

dotenv.config()
const app = express()

app.use(cors({
  origin: '*'
}))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(morgan('dev'))
app.use('/api', allRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


