import { userRepository } from '../lib/repositories/userRepository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createError, type ErrorType } from '../lib/utils/errorHandler'
import { User } from '../generated/prisma'

type LoginResponse = Promise<
  | { user: Omit<User, 'password'>; token: string; error: null }
  | { user: null; token: null; error: ErrorType }
>

export const loginService = async (
  email: string,
  password: string
): LoginResponse => {
  const user = await userRepository.findUserByEmail(email)

  if (!user) {
    return {
      user: null,
      token: null,
      error: createError.unauthorized('Usuário não encontrado'),
    }
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    return {
      user: null,
      token: null,
      error: createError.unauthorized('Credenciais inválidas'),
    }
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1d',
    }
  )
  const { password: _, ...userWithoutPassword } = user

  return { user: userWithoutPassword, token: token, error: null }
}
