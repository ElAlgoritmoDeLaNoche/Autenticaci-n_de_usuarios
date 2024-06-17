import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
dotenv.config()

// middlewares
app.use(express.json())

const corsOptions = {
  // origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('<h3>Hello World!</h3>')
})

const PORT = process.env.PORT ?? 3002

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
