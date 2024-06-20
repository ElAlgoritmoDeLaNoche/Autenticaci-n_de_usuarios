import express from 'express'
import { Login, Register, Logout, Protected } from '../controllers/AuthController.js'

const router = express.Router()

router.post('/login', Login)
router.post('/register', Register)
router.post('/logout', Logout)
router.get('/protected', Protected)

export default router
