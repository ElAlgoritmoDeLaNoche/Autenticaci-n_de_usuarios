import express from 'express'
import cors from 'cors'

import authRoutes from './routes/authRoutes.js'
import { PORT } from './config.js'

const app = express()

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

// routes
app.use('/api', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
