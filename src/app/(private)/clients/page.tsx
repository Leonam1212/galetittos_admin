'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Search,
  Filter,
  Eye,
  Edit,
  Plus,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  X,
} from 'lucide-react'

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  address: string
  registeredAt: string
  totalOrders: number
  totalSpent: number
  lastOrderDate: string
  status: 'active' | 'inactive' | 'vip'
  notes?: string
}

const mockCustomers: Customer[] = [
  {
    id: 'C001',
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-1234',
    address: 'Rua das Flores, 123 - Centro',
    registeredAt: '2023-06-15T10:00:00',
    totalOrders: 15,
    totalSpent: 687.5,
    lastOrderDate: '2024-01-15T10:30:00',
    status: 'vip',
    notes: 'Cliente preferencial, sempre pede galeto inteiro',
  },
  {
    id: 'C002',
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '(11) 98888-5678',
    address: 'Av. Principal, 456 - Jardim',
    registeredAt: '2023-08-22T14:30:00',
    totalOrders: 8,
    totalSpent: 324.8,
    lastOrderDate: '2024-01-15T10:15:00',
    status: 'active',
  },
  {
    id: 'C003',
    name: 'Pedro Costa',
    email: 'pedro.costa@email.com',
    phone: '(11) 97777-9012',
    address: 'Rua do Comércio, 789 - Vila Nova',
    registeredAt: '2023-03-10T09:15:00',
    totalOrders: 22,
    totalSpent: 1245.6,
    lastOrderDate: '2024-01-15T09:45:00',
    status: 'vip',
    notes: 'Empresário local, faz pedidos grandes para eventos',
  },
  {
    id: 'C004',
    name: 'Ana Oliveira',
    email: 'ana.oliveira@email.com',
    phone: '(11) 96666-3456',
    address: 'Rua das Palmeiras, 321 - Bairro Alto',
    registeredAt: '2023-11-05T16:45:00',
    totalOrders: 3,
    totalSpent: 127.4,
    lastOrderDate: '2024-01-15T11:00:00',
    status: 'active',
  },
  {
    id: 'C005',
    name: 'Carlos Mendes',
    email: 'carlos.mendes@email.com',
    phone: '(11) 95555-7890',
    address: 'Av. dos Trabalhadores, 654 - Industrial',
    registeredAt: '2023-01-20T11:20:00',
    totalOrders: 1,
    totalSpent: 45.9,
    lastOrderDate: '2023-12-10T15:30:00',
    status: 'inactive',
    notes: 'Não faz pedidos há mais de 30 dias',
  },
]

export default function CustomersManagement() {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [activeTab, setActiveTab] = useState('all')
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  )
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const getStatusBadge = (status: Customer['status']) => {
    switch (status) {
      case 'vip':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800'
      case 'active':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800'
      case 'inactive':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800'
      default:
        return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: Customer['status']) => {
    switch (status) {
      case 'vip':
        return 'VIP'
      case 'active':
        return 'Ativo'
      case 'inactive':
        return 'Inativo'
    }
  }

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
    const matchesStatus =
      statusFilter === 'all' || customer.status === statusFilter
    const matchesTab = activeTab === 'all' || customer.status === activeTab
    return matchesSearch && matchesStatus && matchesTab
  })

  const getCustomersByStatus = (status: Customer['status']) =>
    customers.filter((customer) => customer.status === status)

  const totalCustomers = customers.length
  const activeCustomers = getCustomersByStatus('active').length
  const vipCustomers = getCustomersByStatus('vip').length
  const inactiveCustomers = getCustomersByStatus('inactive').length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Gestão de Clientes
          </h1>
          <p className="text-gray-600">
            Gerencie todos os clientes da sua galeteria
          </p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Cliente
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Total de Clientes
            </h3>
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {totalCustomers}
          </div>
          <p className="text-xs text-gray-500">+2 novos esta semana</p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Clientes Ativos
            </h3>
            <Users className="h-4 w-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {activeCustomers}
          </div>
          <p className="text-xs text-gray-500">Fizeram pedidos recentemente</p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Clientes VIP</h3>
            <Star className="h-4 w-4 text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{vipCustomers}</div>
          <p className="text-xs text-gray-500">Clientes preferenciais</p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Clientes Inativos
            </h3>
            <Users className="h-4 w-4 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {inactiveCustomers}
          </div>
          <p className="text-xs text-gray-500">Sem pedidos há 30+ dias</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar por nome, email ou telefone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm sm:w-48"
          >
            <option value="all">Todos os Status</option>
            <option value="vip">VIP</option>
            <option value="active">Ativos</option>
            <option value="inactive">Inativos</option>
          </select>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'all', label: `Todos (${totalCustomers})` },
            { id: 'vip', label: `VIP (${vipCustomers})` },
            { id: 'active', label: `Ativos (${activeCustomers})` },
            { id: 'inactive', label: `Inativos (${inactiveCustomers})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`border-b-2 px-1 py-2 text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="grid gap-4">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="rounded-lg border bg-white p-6 shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <span className="text-lg font-semibold text-orange-600">
                    {customer.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">{customer.name}</h3>
                    <span className={getStatusBadge(customer.status)}>
                      {getStatusText(customer.status)}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Phone className="h-3 w-3" />
                      <span>{customer.phone}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail className="h-3 w-3" />
                      <span>{customer.email}</span>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center space-x-1 text-sm text-gray-500">
                    <MapPin className="h-3 w-3" />
                    <span>{customer.address}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="flex items-center space-x-4 text-sm">
                    <div>
                      <p className="font-semibold">
                        {customer.totalOrders} pedidos
                      </p>
                      <p className="text-gray-500">Total</p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        R$ {customer.totalSpent.toFixed(2)}
                      </p>
                      <p className="text-gray-500">Gasto</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCustomer(customer)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCustomer(customer)
                      setIsEditDialogOpen(true)
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredCustomers.length === 0 && (
          <div className="rounded-lg border bg-white p-12 text-center shadow">
            <p className="text-gray-500">Nenhum cliente encontrado</p>
          </div>
        )}
      </div>

      {selectedCustomer && !isEditDialogOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Detalhes do Cliente</h2>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <CustomerDetails customer={selectedCustomer} />
          </div>
        </div>
      )}

      {isAddDialogOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Adicionar Novo Cliente</h2>
              <button
                onClick={() => setIsAddDialogOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <CustomerForm onClose={() => setIsAddDialogOpen(false)} />
          </div>
        </div>
      )}

      {isEditDialogOpen && selectedCustomer && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Editar Cliente</h2>
              <button
                onClick={() => {
                  setIsEditDialogOpen(false)
                  setSelectedCustomer(null)
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <CustomerForm
              customer={selectedCustomer}
              onClose={() => {
                setIsEditDialogOpen(false)
                setSelectedCustomer(null)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

function CustomerDetails({ customer }: { customer: Customer }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-500">Nome</label>
          <p className="mt-1">{customer.name}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Status</label>
          <div className="mt-1">
            <span
              className={
                customer.status === 'vip'
                  ? 'rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800'
                  : customer.status === 'active'
                    ? 'rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800'
                    : 'rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800'
              }
            >
              {customer.status === 'vip'
                ? 'VIP'
                : customer.status === 'active'
                  ? 'Ativo'
                  : 'Inativo'}
            </span>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Email</label>
          <p className="mt-1">{customer.email}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Telefone</label>
          <p className="mt-1">{customer.phone}</p>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-500">Endereço</label>
        <p className="mt-1">{customer.address}</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-500">
            Total de Pedidos
          </label>
          <p className="mt-1 text-2xl font-bold">{customer.totalOrders}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">
            Total Gasto
          </label>
          <p className="mt-1 text-2xl font-bold">
            R$ {customer.totalSpent.toFixed(2)}
          </p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">
            Último Pedido
          </label>
          <p className="mt-1">
            {new Date(customer.lastOrderDate).toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-500">
          Cliente desde
        </label>
        <p className="mt-1">
          {new Date(customer.registeredAt).toLocaleDateString('pt-BR')}
        </p>
      </div>

      {customer.notes && (
        <div>
          <label className="text-sm font-medium text-gray-500">
            Observações
          </label>
          <p className="mt-1 rounded-md bg-gray-50 p-3 text-sm">
            {customer.notes}
          </p>
        </div>
      )}
    </div>
  )
}

function CustomerForm({
  customer,
  onClose,
}: {
  customer?: Customer
  onClose: () => void
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </label>
          <Input
            id="name"
            defaultValue={customer?.name}
            placeholder="Nome completo"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Telefone
          </label>
          <Input
            id="phone"
            defaultValue={customer?.phone}
            placeholder="(11) 99999-9999"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          defaultValue={customer?.email}
          placeholder="email@exemplo.com"
        />
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Endereço
        </label>
        <Input
          id="address"
          defaultValue={customer?.address}
          placeholder="Endereço completo"
        />
      </div>

      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status
        </label>
        <select
          id="status"
          defaultValue={customer?.status || 'active'}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
        >
          <option value="active">Ativo</option>
          <option value="vip">VIP</option>
          <option value="inactive">Inativo</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700"
        >
          Observações
        </label>
        <textarea
          id="notes"
          defaultValue={customer?.notes}
          placeholder="Observações sobre o cliente..."
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          rows={3}
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={onClose}>{customer ? 'Salvar' : 'Adicionar'}</Button>
      </div>
    </div>
  )
}
