'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  User,
  Phone,
  MapPin,
  Plus,
  X,
  Trash2,
  Search,
  Users,
  Calendar,
  AlertCircle,
  Edit,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Client {
  id: string
  name: string
  phone: string
  address?: {
    street: string
    number: string
    neighborhood: string
  }
  createdAt: string
}

const mockClients: Client[] = [
  {
    id: '#001',
    name: 'João Silva',
    phone: '(11) 99999-1234',
    address: {
      street: 'Rua das Flores',
      number: '123',
      neighborhood: 'Centro',
    },
    createdAt: '2024-01-15T10:30:00',
  },
  {
    id: '#002',
    name: 'Maria Santos',
    phone: '(11) 98888-5678',
    createdAt: '2024-01-14T15:45:00',
  },
  {
    id: '#003',
    name: 'Pedro Costa',
    phone: '(11) 97777-9012',
    address: {
      street: 'Avenida Central',
      number: '456',
      neighborhood: 'Jardins',
    },
    createdAt: '2024-01-13T09:20:00',
  },
  {
    id: '#004',
    name: 'Ana Oliveira',
    phone: '(11) 96666-3456',
    createdAt: '2024-01-12T14:10:00',
  },
  {
    id: '#005',
    name: 'Carlos Mendes',
    phone: '(11) 95555-7890',
    address: {
      street: 'Rua das Palmeiras',
      number: '789',
      neighborhood: 'Vila Nova',
    },
    createdAt: '2024-01-11T16:30:00',
  },
]

export default function ClientsManagement() {
  const [clients, setClients] = useState<Client[]>(mockClients)
  const [searchTerm, setSearchTerm] = useState('')
  const [isNewClientOpen, setIsNewClientOpen] = useState(false)
  const [clientToDelete, setClientToDelete] = useState<Client | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editingClient, setEditingClient] = useState<Client | null>(null)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  const createNewClient = (clientData: {
    name: string
    phone: string
    address?: {
      street: string
      number: string
      neighborhood: string
      zip: string
    }
  }) => {
    const newClient: Client = {
      id: `#${String(clients.length + 1).padStart(3, '0')}`,
      name: clientData.name,
      phone: clientData.phone,
      address: clientData.address,
      createdAt: new Date().toISOString(),
    }
    setClients([newClient, ...clients])
    setIsNewClientOpen(false)
  }

  const updateClient = (clientData: {
    id: string
    name: string
    phone: string
    address?: {
      street: string
      number: string
      neighborhood: string
    }
  }) => {
    setClients(
      clients.map((client) =>
        client.id === clientData.id ? { ...client, ...clientData } : client
      )
    )
    setIsEditing(false)
    setEditingClient(null)
  }

  const deleteClient = (clientId: string) => {
    setClients(clients.filter((client) => client.id !== clientId))
    setClientToDelete(null)
  }

  const filteredClients = clients.filter((client) => {
    return (
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.id.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div className="space-y-4 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            <span className="relative text-orange-500">
              GESTÃO{' '}
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-orange-600"></div>
            </span>
            DE CLIENTES
          </h1>
          <p className="text-sm text-gray-600 md:text-base">
            Gerencie todos os clientes da sua galeteria
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-2 sm:w-auto sm:grid-cols-1">
          <button
            onClick={() => setIsNewClientOpen(true)}
            className="flex cursor-pointer items-center justify-center space-x-2 rounded-md bg-orange-600 px-3 py-2 text-white hover:bg-orange-700 sm:px-4"
          >
            <Plus className="h-4 w-4" />
            <span className="text-xs font-semibold sm:text-sm">
              Novo Cliente
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="group rounded-sm border border-gray-300 bg-white p-3 shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md md:p-4">
          <div className="mb-1 flex items-center justify-between md:mb-2">
            <h3 className="text-xs font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:text-orange-900 md:text-sm">
              Total de Clientes
            </h3>
            <Users className="h-3 w-3 text-blue-600 md:h-4 md:w-4" />
          </div>
          <div className="text-xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600 md:text-2xl">
            {clients.length}
          </div>
        </div>

        <div className="group rounded-sm border border-gray-300 bg-white p-3 shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md md:p-4">
          <div className="mb-1 flex items-center justify-between md:mb-2">
            <h3 className="text-xs font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:text-orange-900 md:text-sm">
              Clientes com Endereço
            </h3>
            <MapPin className="h-3 w-3 text-blue-600 md:h-4 md:w-4" />
          </div>
          <div className="text-xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600 md:text-2xl">
            {clients.filter((client) => client.address).length}
          </div>
        </div>

        <div className="group rounded-sm border border-gray-300 bg-white p-3 shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md md:p-4">
          <div className="mb-1 flex items-center justify-between md:mb-2">
            <h3 className="text-xs font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:text-orange-900 md:text-sm">
              Novos (7 dias)
            </h3>
            <Calendar className="h-3 w-3 text-blue-600 md:h-4 md:w-4" />
          </div>
          <div className="text-xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600 md:text-2xl">
            {
              clients.filter((client) => {
                const weekAgo = new Date()
                weekAgo.setDate(weekAgo.getDate() - 7)
                return new Date(client.createdAt) > weekAgo
              }).length
            }
          </div>
        </div>

        <div className="group rounded-sm border border-gray-300 bg-white p-3 shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md md:p-4">
          <div className="mb-1 flex items-center justify-between md:mb-2">
            <h3 className="text-xs font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:text-orange-900 md:text-sm">
              Clientes sem Endereço
            </h3>
            <AlertCircle className="h-3 w-3 text-red-600 md:h-4 md:w-4" />
          </div>
          <div className="text-xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600 md:text-2xl">
            {clients.filter((client) => !client.address).length}
          </div>
        </div>
      </div>

      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar cliente por nome, telefone ou ID"
        className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-600 transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-orange-200 focus:border-orange-600 focus:shadow-md focus:shadow-orange-200 focus:outline-none active:border-orange-600 md:px-4 md:text-base"
      />

      <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow md:p-6">
        {filteredClients.length > 0 ? (
          filteredClients.map((client) => (
            <div
              key={client.id}
              className="mb-4 grid grid-cols-1 gap-4 rounded-xl border border-gray-300 bg-gray-50 p-4 transition-all duration-300 hover:shadow-md lg:grid-cols-4"
            >
              <div className="rounded-lg bg-white p-3 shadow-sm md:p-4">
                <h2 className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase md:mb-2 md:text-sm">
                  Cliente
                </h2>
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4 text-gray-600 md:mr-2 md:h-5 md:w-5" />
                  <p className="text-base font-bold text-gray-800 md:text-lg">
                    {client.name}
                  </p>
                </div>
                <div className="mt-1 flex items-center md:mt-2">
                  <Phone className="mr-1 h-4 w-4 text-gray-600 md:mr-2 md:h-5 md:w-5" />
                  <p className="text-xs text-gray-700 md:text-sm">
                    {client.phone}
                  </p>
                </div>
                <div className="mt-1 flex items-center md:mt-2">
                  <Calendar className="mr-1 h-4 w-4 text-gray-600 md:mr-2 md:h-5 md:w-5" />
                  <p className="text-xs text-gray-700 md:text-sm">
                    Cadastrado em: {formatDate(client.createdAt)}
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm md:p-4 lg:col-span-2">
                <h2 className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase md:mb-2 md:text-sm">
                  Endereço
                </h2>
                {client.address ? (
                  <div>
                    <div className="flex items-start">
                      <MapPin className="mt-[2px] mr-1 h-4 w-4 text-gray-600 md:mr-2 md:h-5 md:w-5" />
                      <div>
                        <p className="text-xs leading-snug text-gray-700 md:text-sm">
                          {client.address.street}, {client.address.number}
                        </p>
                        <p className="text-xs leading-snug text-gray-700 md:text-sm">
                          {client.address.neighborhood}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 md:text-sm">
                    Nenhum endereço cadastrado
                  </p>
                )}
              </div>

              <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-3 shadow-sm md:p-4">
                <button
                  onClick={() => {
                    setIsEditing(true)
                    setEditingClient(client)
                  }}
                  className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-md bg-orange-400 px-2 py-1.5 text-xs text-white transition-colors hover:bg-orange-700 md:gap-2 md:px-4 md:py-2 md:text-sm"
                >
                  <Edit className="h-3 w-3 md:h-4 md:w-4" />
                  Editar
                </button>

                <button
                  onClick={() => setClientToDelete(client)}
                  className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-md bg-red-800 px-2 py-1.5 text-xs text-white transition-colors hover:bg-red-700 md:gap-2 md:px-4 md:py-2 md:text-sm"
                >
                  <Trash2 className="h-3 w-3 md:h-4 md:w-4" />
                  Excluir
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="py-6 text-center text-sm text-gray-600 md:text-base">
            Nenhum cliente encontrado.
          </p>
        )}
      </div>

      {clientToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className="w-11/12 max-w-md rounded-lg bg-white p-4 shadow-lg md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between md:mb-4">
              <h2 className="text-lg font-bold text-red-600 md:text-xl">
                Confirmar Exclusão
              </h2>
              <button
                onClick={() => setClientToDelete(null)}
                className="cursor-pointer text-gray-600 hover:text-gray-900"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="space-y-3 md:space-y-4">
              <p className="text-sm text-gray-700 md:text-base">
                Tem certeza que deseja excluir o cliente{' '}
                <strong>{clientToDelete.name}</strong>?
              </p>
              <p className="text-xs text-red-600 md:text-sm">
                Esta ação não pode ser desfeita. Todos os dados deste cliente
                serão permanentemente removidos do sistema.
              </p>
            </div>

            <div className="mt-4 flex justify-end gap-2 md:mt-6 md:gap-3">
              <button
                onClick={() => setClientToDelete(null)}
                className="cursor-pointer rounded-md bg-gray-200 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-300 md:px-4 md:py-2 md:text-sm"
              >
                Cancelar
              </button>
              <button
                onClick={() => deleteClient(clientToDelete.id)}
                className="cursor-pointer rounded-md bg-red-600 px-3 py-1.5 text-xs text-white hover:bg-red-700 md:px-4 md:py-2 md:text-sm"
              >
                Sim, Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {(isNewClientOpen || isEditing) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        >
          <div
            className="w-11/12 max-w-2xl rounded-lg bg-white p-4 shadow-lg md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between md:mb-4">
              <h2 className="text-lg font-bold text-gray-900 md:text-xl">
                {isEditing ? 'Editar Cliente' : 'Novo Cliente'}
              </h2>
              <button
                onClick={() => {
                  setIsNewClientOpen(false)
                  setIsEditing(false)
                  setEditingClient(null)
                }}
                className="cursor-pointer text-gray-600 hover:text-gray-900"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            <form
              className="flex flex-col gap-3 md:gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const name = formData.get('name') as string
                const phone = formData.get('phone') as string
                const street = formData.get('street') as string
                const number = formData.get('number') as string
                const neighborhood = formData.get('neighborhood') as string
                const zip = formData.get('zip') as string

                const address =
                  street && number && neighborhood && zip
                    ? {
                        street,
                        number,
                        neighborhood,
                        zip,
                      }
                    : undefined

                if (isEditing && editingClient) {
                  updateClient({
                    id: editingClient.id,
                    name,
                    phone,
                    address,
                  })
                } else {
                  createNewClient({
                    name,
                    phone,
                    address,
                  })
                }

                e.currentTarget.reset()
              }}
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-700 md:text-sm">
                    Nome completo *
                  </label>
                  <input
                    name="name"
                    placeholder="Nome do cliente"
                    className="w-full rounded border border-gray-300 p-2 text-sm md:text-base"
                    required
                    defaultValue={isEditing ? editingClient?.name : ''}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-700 md:text-sm">
                    Telefone *
                  </label>
                  <input
                    name="phone"
                    placeholder="Telefone"
                    className="w-full rounded border border-gray-300 p-2 text-sm md:text-base"
                    required
                    defaultValue={isEditing ? editingClient?.phone : ''}
                  />
                </div>
              </div>

              <div className="mt-2">
                <h3 className="mb-2 text-sm font-semibold text-gray-800 md:text-base">
                  Endereço (opcional)
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-700 md:text-sm">
                      Rua
                    </label>
                    <input
                      name="street"
                      placeholder="Nome da rua"
                      className="w-full rounded border border-gray-300 p-2 text-sm md:text-base"
                      defaultValue={
                        isEditing && editingClient?.address
                          ? editingClient.address.street
                          : ''
                      }
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-700 md:text-sm">
                      Número
                    </label>
                    <input
                      name="number"
                      placeholder="Número"
                      className="w-full rounded border border-gray-300 p-2 text-sm md:text-base"
                      defaultValue={
                        isEditing && editingClient?.address
                          ? editingClient.address.number
                          : ''
                      }
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-700 md:text-sm">
                      Bairro
                    </label>
                    <input
                      name="neighborhood"
                      placeholder="Bairro"
                      className="w-full rounded border border-gray-300 p-2 text-sm md:text-base"
                      defaultValue={
                        isEditing && editingClient?.address
                          ? editingClient.address.neighborhood
                          : ''
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsNewClientOpen(false)
                    setIsEditing(false)
                    setEditingClient(null)
                  }}
                  className="cursor-pointer rounded bg-gray-200 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-300 md:px-4 md:py-2 md:text-sm"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="cursor-pointer rounded bg-orange-600 px-3 py-1.5 text-xs text-white hover:bg-orange-700 md:px-4 md:py-2 md:text-sm"
                >
                  {isEditing ? 'Atualizar Cliente' : 'Criar Cliente'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  )
}
