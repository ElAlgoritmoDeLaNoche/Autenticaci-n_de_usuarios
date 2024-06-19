import DBLocal from 'db-local'
import crypto from 'crypto'
import bcrypt from 'bcryptjs'

import { SALT } from './config.js'
const { Schema } = new DBLocal({ path: './db' })

const User = Schema('User', {
  _id: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export class UserRepository {
  static async create ({ username, password }) {
    Validation.username(username)
    Validation.password(password)

    // Validar que el usuario no exista en la base de datos
    const user = User.findOne({ username })
    if (user) throw new Error('User already exists')

    const id = crypto.randomUUID()
    const hashedPassword = await bcrypt.hash(password, SALT)

    User.create({
      _id: id,
      username,
      password: hashedPassword
    }).save()

    return id
  }

  static login ({ username, password }) {
    Validation.username(username)
    Validation.password(password)

    const user = User.findOne({ username })
    if (!user) throw new Error('Username does not exist')

    const isValid = bcrypt.compareSync(password, user.password)
    if (!isValid) throw new Error('Password is invalid')

    const { password: _, ...publicPassword } = user

    return publicPassword
  }
}

class Validation {
  static username (username) {
    // Validaciones de username (opcional: usar zod)
    if (typeof username !== 'string') throw new Error('Username must be a string')
    if (username.length < 3) throw new Error('Username must be at least 3 characters long')
  }

  static password (password) {
    // Validaciones de password (opcional: usar zod)
    if (typeof password !== 'string') throw new Error('Password must be a string')
    if (password.length < 6) throw new Error('Password must be at least 6 characters long')
  }
}
