import { userRepository } from '../lib/repositories/userRepository'
import bcrypt from 'bcrypt'
import { createError } from '../lib/utils/errorHandler'

export const loginService = async (email: string, password: string) => {
  const user = await userRepository.findUserByEmail(email)
  if (!user) {
    throw createError.unauthorized('Usuário não encontrado')
  }
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw createError.unauthorized('Credenciais inválidas')
  }

  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}
