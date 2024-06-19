import { UserRepository } from '../user-repository.js'

export const Login = async (req, res) => {
  const { username, password } = req.body

  console.log({ username, password })

  try {
    const user = await UserRepository.login({ username, password })

    res.status(200).json({ user })
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
  res.status(200).json({ message: 'Protected route' })
}
