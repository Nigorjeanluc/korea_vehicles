import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(cors({
  origin: '*'
}))

app.use(morgan('dev'))

let people = [
    {
      name: "Hannah Rickard",
      number: "06-51-99-56-83",
      id: 1
    },
    {
      name: "Hyun Namkoong",
      number: "10987654",
      id: 2
    },
    {
      name: "Courtney Martinez",
      number: "3691215",
      id: 3
    }
  ]

  app.get('/', (request, response) => {
      response.send('<h1>Phonebook</h1>')
  })

  app.get('/api/people', (request, response) => {
      response.json(people)
  })

  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })


