import { Clients, Products } from '../../generated/prisma'
import { prisma } from '../prisma'
import { ClientsCreateInput } from '../schemas/clientsSchema'

const findAllClients = async (): Promise<Clients[]> => {
  return prisma.clients.findMany()
}

const createClient = async (client: ClientsCreateInput): Promise<Clients> => {
  return prisma.clients.create({ data: client })
}

const updateClient = async (id: string, client: Clients): Promise<Clients> => {
  return prisma.clients.update({ where: { id }, data: client })
}

const deleteClient = async (id: string): Promise<Clients> => {
  return prisma.clients.delete({ where: { id } })
}

const findClientById = async (id: string): Promise<Clients | null> => {
  return prisma.clients.findUnique({ where: { id } })
}

export const clientsRepository = {
  findAllClients,
  createClient,
  updateClient,
  deleteClient,
  findClientById,
}

export type clientsRepository = typeof clientsRepository
