'use client'

import {
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  Filter,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

type OrderStatus = 'active' | 'pending' | 'finished' | 'cancelled'

interface Order {
  id: string
  customer: string
  phone: string
  items: { name: string; quantity: number; price: number }[]
  total: number
  status: OrderStatus
  createdAt: string
  estimatedTime?: string
}

const mockOrders: Order[] = [
  {
    id: '#001',
    customer: 'João Silva',
    phone: '(11) 99999-1234',
    items: [
      { name: 'Galeto Inteiro', quantity: 1, price: 32.9 },
      { name: 'Batata Frita', quantity: 1, price: 13.0 },
    ],
    total: 45.9,
    status: 'pending',
    createdAt: '2024-01-15T10:30:00',
    estimatedTime: '25 min',
  },
  {
    id: '#002',
    customer: 'Maria Santos',
    phone: '(11) 98888-5678',
    items: [
      { name: 'Meio Galeto', quantity: 1, price: 19.5 },
      { name: 'Refrigerante 2L', quantity: 1, price: 13.0 },
    ],
    total: 32.5,
    status: 'active',
    createdAt: '2024-01-15T10:15:00',
  },
  {
    id: '#003',
    customer: 'Pedro Costa',
    phone: '(11) 97777-9012',
    items: [
      { name: 'Galeto Inteiro', quantity: 2, price: 32.9 },
      { name: 'Molho Especial', quantity: 1, price: 2.0 },
    ],
    total: 67.8,
    status: 'pending',
    createdAt: '2024-01-15T09:45:00',
  },
  {
    id: '#004',
    customer: 'Ana Oliveira',
    phone: '(11) 96666-3456',
    items: [
      { name: 'Meio Galeto', quantity: 1, price: 19.5 },
      { name: 'Salada', quantity: 1, price: 9.4 },
    ],
    total: 28.9,
    status: 'pending',
    createdAt: '2024-01-15T11:00:00',
  },
  {
    id: '#005',
    customer: 'Carlos Mendes',
    phone: '(11) 95555-7890',
    items: [
      { name: 'Galeto Inteiro', quantity: 1, price: 32.9 },
      { name: 'Batata Frita', quantity: 2, price: 13.0 },
    ],
    total: 58.9,
    status: 'cancelled',
    createdAt: '2024-01-15T08:30:00',
  },
]

export default function DashboardOverview() {
  const [orders, setOrders] = useState<Order[]>(mockOrders)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [activeTab, setActiveTab] = useState<string>('all')

  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'active':
        return <Clock className="h-4 w-4 text-yellow-500" />
      case 'pending':
        return <AlertTriangle className="h-4 w-4 text-blue-500" />
      case 'finished':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'cancelled':
        return <AlertTriangle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusText = (status: OrderStatus) => {
    switch (status) {
      case 'active':
        return 'Ativo'
      case 'pending':
        return 'Pendente'
      case 'finished':
        return 'Finalizado'
      case 'cancelled':
        return 'Cancelado'
    }
  }

  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    )
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
      statusFilter === 'all' || order.status === statusFilter
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'active' &&
        (order.status === 'active' || order.status === 'pending')) ||
      (activeTab === 'finished' && order.status === 'finished')
    return matchesSearch && matchesStatus && matchesTab
  })

  const pendingOrders = orders.filter(
    (order) => order.status === 'pending'
  ).length
  const activeOrders = orders.filter(
    (order) => order.status === 'active'
  ).length
  const finishedOrders = orders.filter(
    (order) => order.status === 'finished'
  ).length
  const totalRevenue = orders
    .filter((order) => order.status === 'finished')
    .reduce((sum, order) => sum + order.total, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Gestão de Pedidos</h1>
        <p className="text-gray-600">Visão geral da sua galeteria</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-300 bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Pendentes</h3>
            <ShoppingCart className="h-4 w-4 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {pendingOrders}
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Ativos</h3>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{activeOrders}</div>
        </div>

        <div className="rounded-lg border border-gray-300 bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Finalizados</h3>
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {finishedOrders}
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Receita Total</h3>
            <Package className="h-4 w-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            R$ {totalRevenue.toFixed(2)}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Buscar por cliente ou número do pedido..."
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm placeholder:text-gray-400 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              type="text"
            />
            <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
          </div>

          <div className="flex items-center justify-center space-x-2">
            <DropdownMenu
              value={''}
              onValueChange={function (value: string): void {
                throw new Error('Function not implemented.')
              }}
            >
              <DropdownMenuTrigger asChild>
                <Button className="rounded-lg bg-gray-500 text-white hover:bg-gray-600">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtros
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filtrar por:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setStatusFilter('all')}
                  value={''}
                >
                  Todos os Status
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setStatusFilter('pending')}
                  value={''}
                >
                  Pendentes
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setStatusFilter('active')}
                  value={''}
                >
                  Ativos
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setStatusFilter('finished')}
                  value={''}
                >
                  Finalizados
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setStatusFilter('cancelled')}
                  value={''}
                >
                  Cancelados
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-4">
        <div className="flex justify-center gap-4 rounded-xl p-2 shadow">
          <Button
            onClick={() => setActiveTab('all')}
            className={`flex-1 font-bold shadow hover:bg-gray-300 active:scale-95 ${
              activeTab === 'all'
                ? 'bg-gray-500 text-white'
                : 'bg-white text-black'
            }`}
          >
            Todos ({orders.length})
          </Button>
          <Button
            onClick={() => setActiveTab('active')}
            className={`flex-1 font-bold shadow hover:bg-gray-300 active:scale-95 ${
              activeTab === 'active'
                ? 'bg-gray-500 text-white'
                : 'bg-white text-black'
            }`}
          >
            Ativos ({activeOrders + pendingOrders})
          </Button>
          <Button
            onClick={() => setActiveTab('finished')}
            className={`flex-1 font-bold shadow hover:bg-gray-300 active:scale-95 ${
              activeTab === 'finished'
                ? 'bg-gray-500 text-white'
                : 'bg-white text-black'
            }`}
          >
            Finalizados ({finishedOrders})
          </Button>
        </div>

        <div className="w-full space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              Nenhum pedido encontrado
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-lg border border-gray-400 bg-white p-6 shadow"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(order.status)}
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {order.customer}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {order.phone} • {order.id}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      R$ {order.total.toFixed(2)}
                    </p>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        order.status === 'active'
                          ? 'bg-yellow-100 text-yellow-800'
                          : order.status === 'pending'
                            ? 'bg-blue-100 text-blue-800'
                            : order.status === 'finished'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium text-gray-700">
                    Itens:
                  </h4>
                  <div className="space-y-1">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-sm text-gray-600"
                      >
                        <span>
                          {item.quantity}x {item.name}
                        </span>
                        <span>
                          R$ {(item.quantity * item.price).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {order.status !== 'finished' &&
                  order.status !== 'cancelled' && (
                    <div className="flex gap-2">
                      {order.status === 'pending' && (
                        <Button
                          onClick={() => updateOrderStatus(order.id, 'active')}
                          size="sm"
                          className="bg-blue-500 text-white hover:bg-blue-600"
                        >
                          Iniciar Preparo
                        </Button>
                      )}
                      {order.status === 'active' && (
                        <Button
                          onClick={() =>
                            updateOrderStatus(order.id, 'finished')
                          }
                          size="sm"
                          className="bg-green-500 text-white hover:bg-green-600"
                        >
                          Finalizar
                        </Button>
                      )}
                      <Button
                        onClick={() => updateOrderStatus(order.id, 'cancelled')}
                        size="sm"
                        variant="outline"
                        className="border-red-600 text-red-600 hover:bg-red-50"
                      >
                        Cancelar
                      </Button>
                    </div>
                  )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
