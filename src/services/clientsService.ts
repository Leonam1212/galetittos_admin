import { createError } from '../lib/utils/errorHandler'
import { productsRepository } from '../lib/repositories/productsRepository'
import { clientsRepository } from '../lib/repositories/clientsRepository'

export const findAllClientsService = () => {
  return clientsRepository.findAllClients()
}

export const createClientService = async (client: any) => {
  return clientsRepository.createClient(client)
}

export const updateClientService = (id: string, client: any) => {
  return clientsRepository.updateClient(id, client)
}

export const deleteClientService = async (id: string) => {
  const client = await clientsRepository.findClientById(id)
  if (!client) {
    throw createError.notFound('Cliente não encontrado')
  }
  return clientsRepository.deleteClient(id)
}
