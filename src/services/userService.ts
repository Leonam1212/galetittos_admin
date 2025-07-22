import bcrypt from 'bcrypt'
import { userRepository } from '../lib/repositories/userRepository'
import {
  UserCreateInput,
  userCreateInputSchema,
} from '../lib/schemas/userSchema'
import { createError } from '../lib/utils/errorHandler'

export const findAllUsersService = () => {
  return userRepository.findAllUsers()
}

export const findUserByIdService = (id: string) => {
  return userRepository.findUserById(id)
}

export const findUserByEmailService = (email: string) => {
  return userRepository.findUserByEmail(email)
}

export const findUserByCpfService = (cpf: string) => {
  return userRepository.findUserByCpf(cpf)
}

export const createUserService = async (user: UserCreateInput) => {
  const parsedUser = userCreateInputSchema.safeParse(user)

  if (!parsedUser.success) {
    throw new Error(parsedUser.error.message)
  }

  const alreadyExists = await userRepository.findUserByEmail(
    parsedUser.data.email
  )

  if (alreadyExists) {
    throw createError.conflict('Email já cadastrado')
  }

  const hashedPassword = await bcrypt.hash(parsedUser.data.password, 10)

  const userToCreate = Object.assign(parsedUser.data, {
    password: hashedPassword,
  })

  return userRepository.createUser(userToCreate)
}

export const updateUserService = (id: string, user: any) => {
  return userRepository.updateUser(id, user)
}

export const deleteUserService = async (id: string) => {
  const user = await userRepository.findUserById(id)
  if (!user) {
    throw createError.notFound('Usuário não encontrado')
  }
  return userRepository.deleteUser(id)
}
