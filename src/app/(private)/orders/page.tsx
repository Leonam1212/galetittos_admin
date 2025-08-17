'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  Filter,
  Eye,
  Plus,
  X,
  Trash2,
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
  isDelivery: boolean
  address?: string
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
    isDelivery: true,
    address: 'Rua das Flores, 123',
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
    isDelivery: false,
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
    isDelivery: true,
    address: 'Av. Principal, 456',
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
    isDelivery: false,
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
    isDelivery: false,
  },
]

const availableProducts = [
  { name: 'Galeto Inteiro', price: 47.0 },
  { name: 'Meio Galeto', price: 25.0 },
  { name: 'Batata Frita', price: 15.0 },
  { name: 'Refrigerante 2L', price: 12.0 },
  { name: 'Salada Verde', price: 8.0 },
  { name: 'Molho Especial', price: 3.0 },
]

export default function OrdersManagement() {
  const [orders, setOrders] = useState<Order[]>(mockOrders)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed'>(
    'all'
  )
  const [isNewOrderOpen, setIsNewOrderOpen] = useState(false)

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

  const createNewOrder = (orderData: {
    customer: string
    phone: string
    items: { name: string; quantity: number; price: number }[]
    isDelivery: boolean
    address?: string
  }) => {
    const newOrder: Order = {
      id: `#${String(orders.length + 1).padStart(3, '0')}`,
      customer: orderData.customer,
      phone: orderData.phone,
      items: orderData.items,
      total: orderData.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      status: 'pending',
      createdAt: new Date().toISOString(),
      estimatedTime: '30 min',
      isDelivery: orderData.isDelivery,
      address: orderData.address,
    }
    setOrders([newOrder, ...orders])
    setIsNewOrderOpen(false)
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Gestão de Pedidos
          </h1>
          <p className="text-gray-600">
            Gerencie todos os pedidos da sua galeteria
          </p>
        </div>
        {/* New Order Button */}
        <button
          onClick={() => setIsNewOrderOpen(true)}
          className="flex items-center space-x-2 rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
        >
          <Plus className="h-4 w-4" />
          <span>Novo Pedido</span>
        </button>
      </div>

      {/* Stats Cards */}
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

      {/* Filters */}
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

      {/* Orders Tabs */}
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

      {/* New Order Modal */}
      {isNewOrderOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Novo Pedido</h2>
              <button
                onClick={() => setIsNewOrderOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <NewOrderForm
              onCreateOrder={createNewOrder}
              onClose={() => setIsNewOrderOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Detalhes do Pedido</h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <OrderDetails order={selectedOrder} />
          </div>
        </div>
      )}
    </div>
  )
}

function NewOrderForm({
  onCreateOrder,
  onClose,
}: {
  onCreateOrder: (orderData: {
    customer: string
    phone: string
    items: { name: string; quantity: number; price: number }[]
    isDelivery: boolean
    address?: string
  }) => void
  onClose: () => void
}) {
  const [customer, setCustomer] = useState('')
  const [phone, setPhone] = useState('')
  const [isDelivery, setIsDelivery] = useState(false)
  const [address, setAddress] = useState('')
  const [selectedItems, setSelectedItems] = useState<
    { name: string; quantity: number; price: number }[]
  >([])

  const addItem = (product: { name: string; price: number }) => {
    const existingItem = selectedItems.find(
      (item) => item.name === product.name
    )
    if (existingItem) {
      setSelectedItems(
        selectedItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setSelectedItems([...selectedItems, { ...product, quantity: 1 }])
    }
  }

  const removeItem = (productName: string) => {
    setSelectedItems(selectedItems.filter((item) => item.name !== productName))
  }

  const updateQuantity = (productName: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productName)
    } else {
      setSelectedItems(
        selectedItems.map((item) =>
          item.name === productName ? { ...item, quantity } : item
        )
      )
    }
  }

  const total = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleSubmit = () => {
    if (customer && phone && selectedItems.length > 0) {
      onCreateOrder({
        customer,
        phone,
        items: selectedItems,
        isDelivery,
        address: isDelivery ? address : undefined,
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Customer Info */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Nome do Cliente
          </label>
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Nome completo"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Telefone
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(11) 99999-9999"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Delivery Option */}
      <div className="space-y-3">
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="delivery"
              checked={!isDelivery}
              onChange={() => setIsDelivery(false)}
              className="text-orange-600 focus:ring-orange-500"
            />
            <span>Retirada no Balcão</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="delivery"
              checked={isDelivery}
              onChange={() => setIsDelivery(true)}
              className="text-orange-600 focus:ring-orange-500"
            />
            <span>Entrega</span>
          </label>
        </div>

        {isDelivery && (
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Endereço de Entrega
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Endereço completo"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>
        )}
      </div>

      {/* Products */}
      <div>
        <h3 className="mb-3 text-lg font-medium">Produtos Disponíveis</h3>
        <div className="mb-4 grid grid-cols-2 gap-3">
          {availableProducts.map((product) => (
            <button
              key={product.name}
              onClick={() => addItem(product)}
              className="rounded-md border border-gray-300 p-3 text-left hover:bg-gray-50"
            >
              <div className="font-medium">{product.name}</div>
              <div className="text-sm text-gray-600">
                R$ {product.price.toFixed(2)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Items */}
      {selectedItems.length > 0 && (
        <div>
          <h3 className="mb-3 text-lg font-medium">Itens do Pedido</h3>
          <div className="mb-4 space-y-2">
            {selectedItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-md bg-gray-50 p-3"
              >
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="ml-2 text-gray-600">
                    R$ {item.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.name, item.quantity - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.name, item.quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.name)}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right">
            <span className="text-xl font-bold">
              Total: R$ {total.toFixed(2)}
            </span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end space-x-3">
        <button
          onClick={onClose}
          className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          onClick={handleSubmit}
          disabled={
            !customer ||
            !phone ||
            selectedItems.length === 0 ||
            (isDelivery && !address)
          }
          className="rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Criar Pedido
        </button>
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
                  {/* Delivery Indicator */}
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      order.isDelivery
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {order.isDelivery ? 'Entrega' : 'Balcão'}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {order.id} • {order.phone} •{' '}
                  {new Date(order.createdAt).toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
                {/* Address for Delivery Orders */}
                {order.isDelivery && order.address && (
                  <p className="text-sm text-gray-500">📍 {order.address}</p>
                )}
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
                <button
                  onClick={() => onViewOrder(order)}
                  className="flex items-center rounded-md border border-gray-300 px-3 py-1 hover:bg-gray-50"
                >
                  <Eye className="h-4 w-4" />
                </button>

                {order.status === 'pending' && (
                  <button
                    onClick={() => onUpdateStatus(order.id, 'preparing')}
                    className="rounded-md bg-orange-600 px-3 py-1 text-white hover:bg-orange-700"
                  >
                    Iniciar
                  </button>
                )}

                {order.status === 'preparing' && (
                  <button
                    onClick={() => onUpdateStatus(order.id, 'ready')}
                    className="rounded-md bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                  >
                    Finalizar
                  </button>
                )}

                {order.status === 'ready' && (
                  <button
                    onClick={() => onUpdateStatus(order.id, 'delivered')}
                    className="rounded-md bg-green-600 px-3 py-1 text-white hover:bg-green-700"
                  >
                    Entregar
                  </button>
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

function OrderDetails({ order }: { order: Order }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-500">Cliente</label>
          <p className="mt-1 font-medium">{order.customer}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Telefone</label>
          <p className="mt-1">{order.phone}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Pedido</label>
          <p className="mt-1">{order.id}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Status</label>
          <div className="mt-1">
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
              {order.status === 'pending' && 'Pendente'}
              {order.status === 'preparing' && 'Preparando'}
              {order.status === 'ready' && 'Pronto'}
              {order.status === 'delivered' && 'Entregue'}
              {order.status === 'cancelled' && 'Cancelado'}
            </span>
          </div>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-500">
          Tipo de Pedido
        </label>
        <p className="mt-1">
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              order.isDelivery
                ? 'bg-purple-100 text-purple-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {order.isDelivery ? 'Entrega' : 'Retirada no Balcão'}
          </span>
        </p>
        {order.isDelivery && order.address && (
          <p className="mt-2 text-sm text-gray-600">📍 {order.address}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium text-gray-500">
          Itens do Pedido
        </label>
        <div className="mt-2 space-y-2">
          {order.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-md bg-gray-50 p-3"
            >
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="ml-2 text-gray-600">x{item.quantity}</span>
              </div>
              <span className="font-medium">
                R$ {(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">Total</span>
          <span className="text-2xl font-bold">
            R$ {order.total.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        <p>
          Pedido realizado em:{' '}
          {new Date(order.createdAt).toLocaleString('pt-BR')}
        </p>
        {order.estimatedTime && <p>Tempo estimado: {order.estimatedTime}</p>}
      </div>
    </div>
  )
}
