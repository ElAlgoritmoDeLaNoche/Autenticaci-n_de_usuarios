import jwt from 'jsonwebtoken'
import { UserRepository } from '../user-repository.js'
import { JWT_SECRET } from '../config.js'

export const Login = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await UserRepository.login({ username, password })
    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' })

    res
      .cookie('access_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60
      })
      .status(200).json({ user, token })
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
}

export const Register = async (req, res) => {
  const { username, password } = req.body

  try {
    const id = await UserRepository.create({ username, password })

    res.status(201).json({ id })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const Logout = async (req, res) => { }

export const Protected = async (req, res) => {
  const token = req.cookies.access_token

  if (!token) {
    return res.status(403).send('Access not authorized')
  }

  try {
    const data = jwt.verify(token, JWT_SECRET)
    res.render('protected', data) // { _id, username }
  } catch (error) {
    res.status(401).send('Access not authorized')
  }
}
