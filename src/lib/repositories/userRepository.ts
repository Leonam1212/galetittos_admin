import { User } from '../../../generated/prisma'
import { prisma } from '../prisma'
import { UserCreateInput } from '../schemas/userSchema'

const findAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany()
}

const findUserById = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { id } })
}

const findUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { email } })
}

const findUserByCpf = async (cpf: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { cpf } })
}

const createUser = async (user: UserCreateInput): Promise<User> => {
  return prisma.user.create({ data: user })
}

const updateUser = async (id: string, user: User): Promise<User> => {
  return prisma.user.update({ where: { id }, data: user })
}

const deleteUser = async (id: string): Promise<User> => {
  return prisma.user.delete({ where: { id } })
}

export const userRepository = {
  findAllUsers,
  findUserById,
  findUserByEmail,
  findUserByCpf,
  createUser,
  updateUser,
  deleteUser,
}

export type userRepository = typeof userRepository
