import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

import authRoutes from './routes/authRoutes.js'
import { JWT_SECRET, PORT } from './config.js'

const app = express()
app.use(cookieParser())
app.set('view engine', 'ejs')

// middlewares
app.use(express.json())

const corsOptions = {
  // origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  const token = req.cookies.access_token

  try {
    const data = jwt.verify(token, JWT_SECRET)
    res.render('index', data)
  } catch (error) {
    res.render('index')
  }
})

// routes
app.use('/api', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
