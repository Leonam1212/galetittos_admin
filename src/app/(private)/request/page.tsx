'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  Filter,
  Eye,
} from 'lucide-react'

type OrderStatus = 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled'

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
    status: 'preparing',
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
    status: 'ready',
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
    status: 'delivered',
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

export default function OrdersManagement() {
  const [orders, setOrders] = useState<Order[]>(mockOrders)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed'>(
    'all'
  )

  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />
      case 'preparing':
        return <Clock className="h-4 w-4 text-orange-500" />
      case 'ready':
        return <AlertTriangle className="h-4 w-4 text-blue-500" />
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'cancelled':
        return <AlertTriangle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusText = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return 'Pendente'
      case 'preparing':
        return 'Preparando'
      case 'ready':
        return 'Pronto'
      case 'delivered':
        return 'Entregue'
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
    return matchesSearch && matchesStatus
  })

  const getOrdersByStatus = (status: OrderStatus) =>
    filteredOrders.filter((order) => order.status === status)

  const getOrdersForActiveTab = () => {
    switch (activeTab) {
      case 'active':
        return filteredOrders.filter((order) =>
          ['pending', 'preparing', 'ready'].includes(order.status)
        )
      case 'completed':
        return filteredOrders.filter((order) =>
          ['delivered', 'cancelled'].includes(order.status)
        )
      case 'all':
      default:
        return filteredOrders
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Gestão de Pedidos</h1>
        <p className="text-gray-600">
          Gerencie todos os pedidos da sua galeteria
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Pendentes</h3>
            <Clock className="h-4 w-4 text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {getOrdersByStatus('pending').length}
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Preparando</h3>
            <Clock className="h-4 w-4 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {getOrdersByStatus('preparing').length}
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Prontos</h3>
            <AlertTriangle className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {getOrdersByStatus('ready').length}
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Entregues</h3>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {getOrdersByStatus('delivered').length}
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Cancelados</h3>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {getOrdersByStatus('cancelled').length}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar por cliente ou número do pedido..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="relative">
          <Filter className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none sm:w-48"
          >
            <option value="all">Todos os Status</option>
            <option value="pending">Pendentes</option>
            <option value="preparing">Preparando</option>
            <option value="ready">Prontos</option>
            <option value="delivered">Entregues</option>
            <option value="cancelled">Cancelados</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex space-x-1 rounded-lg bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Todos ({filteredOrders.length})
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'active'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Ativos (
            {getOrdersByStatus('pending').length +
              getOrdersByStatus('preparing').length +
              getOrdersByStatus('ready').length}
            )
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'completed'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Finalizados (
            {getOrdersByStatus('delivered').length +
              getOrdersByStatus('cancelled').length}
            )
          </button>
        </div>

        <div className="space-y-4">
          <OrdersList
            orders={getOrdersForActiveTab()}
            onUpdateStatus={updateOrderStatus}
            onViewOrder={setSelectedOrder}
          />
        </div>
      </div>
    </div>
  )
}

interface OrdersListProps {
  orders: Order[]
  onUpdateStatus: (orderId: string, status: OrderStatus) => void
  onViewOrder: (order: Order) => void
}

function OrdersList({ orders, onUpdateStatus, onViewOrder }: OrdersListProps) {
  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />
      case 'preparing':
        return <Clock className="h-4 w-4 text-orange-500" />
      case 'ready':
        return <AlertTriangle className="h-4 w-4 text-blue-500" />
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'cancelled':
        return <AlertTriangle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusText = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return 'Pendente'
      case 'preparing':
        return 'Preparando'
      case 'ready':
        return 'Pronto'
      case 'delivered':
        return 'Entregue'
      case 'cancelled':
        return 'Cancelado'
    }
  }

  return (
    <div className="grid gap-4">
      {orders.map((order) => (
        <div key={order.id} className="rounded-lg border bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {getStatusIcon(order.status)}
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">{order.customer}</h3>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      order.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : order.status === 'preparing'
                          ? 'bg-orange-100 text-orange-800'
                          : order.status === 'ready'
                            ? 'bg-blue-100 text-blue-800'
                            : order.status === 'delivered'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {getStatusText(order.status)}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {order.id} • {order.phone} •{' '}
                  {new Date(order.createdAt).toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    {order.items
                      .map((item) => `${item.quantity}x ${item.name}`)
                      .join(', ')}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-semibold">R$ {order.total.toFixed(2)}</p>
                {order.estimatedTime && (
                  <p className="text-sm text-gray-500">{order.estimatedTime}</p>
                )}
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onViewOrder(order)}
                >
                  <Eye className="h-4 w-4" />
                </Button>

                {order.status === 'pending' && (
                  <Button
                    size="sm"
                    onClick={() => onUpdateStatus(order.id, 'preparing')}
                  >
                    Iniciar
                  </Button>
                )}

                {order.status === 'preparing' && (
                  <Button
                    size="sm"
                    onClick={() => onUpdateStatus(order.id, 'ready')}
                  >
                    Finalizar
                  </Button>
                )}

                {order.status === 'ready' && (
                  <Button
                    size="sm"
                    onClick={() => onUpdateStatus(order.id, 'delivered')}
                  >
                    Entregar
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {orders.length === 0 && (
        <div className="rounded-lg border bg-white p-12 text-center shadow">
          <p className="text-gray-500">Nenhum pedido encontrado</p>
        </div>
      )}
    </div>
  )
}
