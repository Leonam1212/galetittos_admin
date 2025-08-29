'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
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
  User,
  Phone,
  MapPin,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { get } from 'http'
import { is } from 'zod/v4/locales'

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
    status: 'pending',
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
  const [chickenQuantityModal, setChickenQuantityModal] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<
    { name: string; price: number }[]
  >([])
  const [isDelivery, setIsDelivery] = useState(false)

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
    <div className="space-y-6 p-10 md:p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="relative text-3xl font-bold text-gray-900">
            <span className="relative text-orange-500">
              GESTÃO {''}
              <div className="absolute bottom-0 left-[-5px] h-[.1px] w-full bg-orange-600"></div>{' '}
            </span>
            DE PEDIDOS
          </h1>
          <p className="text-gray-600">
            Gerencie todos os pedidos da sua galeteria
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() =>
              setChickenQuantityModal(() =>
                chickenQuantityModal ? false : true
              )
            }
            className="flex cursor-pointer items-center space-x-2 rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
          >
            <Plus className="h-4 w-4" />
            <span className="">Quantidade de frango</span>
          </button>

          <button
            onClick={() => setIsNewOrderOpen(true)}
            className="flex cursor-pointer items-center space-x-2 rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
          >
            <Plus className="h-4 w-4" />
            <span className="">Novo Pedido</span>
          </button>
        </div>
      </div>

      <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="group rounded-sm border-t border-r-1 border-l-1 border-gray-300 border-r-orange-600/30 border-l-orange-600/30 bg-white p-4 shadow-lg shadow-orange-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:text-orange-900">
              Clientes Pendentes
            </h3>
            <AlertTriangle className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600">
            {getOrdersByStatus('pending').length}
          </div>
        </div>

        <div className="group rounded-sm border-t border-r-1 border-l-1 border-gray-300 border-r-orange-600/30 border-l-orange-600/30 bg-white p-4 shadow-lg shadow-orange-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:text-orange-900">
              Frangos Prontos
            </h3>
            <AlertTriangle className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600">
            {getOrdersByStatus('ready').length}
          </div>
        </div>

        <div className="group rounded-sm border-t border-r-1 border-l-1 border-gray-300 border-r-orange-600/30 border-l-orange-600/30 bg-white p-4 shadow-lg shadow-orange-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:text-orange-900">
              Entregados
            </h3>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600">
            {getOrdersByStatus('delivered').length}
          </div>
        </div>

        <div className="group rounded-sm border-t border-r-1 border-l-1 border-gray-300 border-r-orange-600/30 border-l-orange-600/30 bg-white p-4 shadow-lg shadow-orange-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:text-orange-900">
              Cancelados
            </h3>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600">
            {getOrdersByStatus('cancelled').length}
          </div>
        </div>
      </div>

      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar pedido"
        className="w-full rounded border border-gray-300 px-4 py-2 text-gray-600 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-200 focus:border-orange-600 focus:shadow-lg focus:shadow-orange-200 focus:outline-none active:border-orange-600"
      />

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
        {getOrdersForActiveTab().length > 0 ? (
          getOrdersForActiveTab().map((order) => (
            <div
              key={order.id}
              className="mb-6 grid grid-cols-1 gap-6 rounded-xl border border-gray-300 bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg lg:grid-cols-4"
            >
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h2 className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                  Cliente
                </h2>
                <div className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-gray-600" />
                  <p className="text-lg font-bold text-gray-800">
                    {order.customer}
                  </p>
                </div>
                <div className="mt-2 flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-gray-600" />
                  <p className="text-sm text-gray-700">{order.phone}</p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm lg:col-span-2">
                <h2 className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                  Detalhes
                </h2>

                <div>
                  {' '}
                  <div className="mb-4">
                    <h3 className="mb-1 text-base font-semibold text-gray-800">
                      Pedido
                    </h3>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.quantity}x {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {order.isDelivery && order.address && (
                    <div>
                      <h3 className="mb-1 text-base font-semibold text-gray-800">
                        Endereço
                      </h3>
                      <div className="flex items-start">
                        <MapPin className="mt-[2px] mr-2 h-5 w-5 text-gray-600" />
                        <p className="text-sm leading-snug text-gray-700">
                          {order.address}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-4 text-center">
                  <h2 className="text-base font-semibold text-gray-800">
                    Preço Total
                  </h2>
                  <span className="mt-1 text-2xl font-bold text-orange-600">
                    R$ {order.total.toFixed(2)}
                  </span>
                </div>

                <DropdownMenu
                  value={''}
                  onValueChange={function (value: string): void {
                    throw new Error('Function not implemented.')
                  }}
                >
                  <DropdownMenuTrigger className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-200">
                    {getStatusText(order.status)} {getStatusIcon(order.status)}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Situação:</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {(
                      [
                        'pending',
                        'ready',
                        'delivered',
                        'cancelled',
                      ] as OrderStatus[]
                    ).map((status) => (
                      <DropdownMenuItem
                        key={status}
                        onSelect={() => updateOrderStatus(order.id, status)}
                        value={status}
                        className="cursor-pointer capitalize"
                      >
                        {getStatusText(status)} {getStatusIcon(status)}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))
        ) : (
          <p className="py-10 text-center text-gray-600">
            Nenhum pedido encontrado.
          </p>
        )}
      </div>

      {chickenQuantityModal && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Quantidade de Frangos
              </h2>
              <button
                onClick={() => setChickenQuantityModal(false)}
                className="cursor-pointer text-gray-600 hover:text-gray-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <p className="text-gray-600">
              Quantidade de frangos no pedido: {chickenQuantityModal}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setChickenQuantityModal(false)}
                className="cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {isNewOrderOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        >
          <div
            className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Novo Pedido</h2>
              <button
                onClick={() => setIsNewOrderOpen(false)}
                className="cursor-pointer text-gray-600 hover:text-gray-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const customer = formData.get('customer') as string
                const phone = formData.get('phone') as string
                const address = formData.get('address') as string | undefined

                if (selectedProducts.length === 0) {
                  alert('Selecione ao menos um produto para o pedido')
                  return
                }
                const orderData = {
                  customer,
                  phone,
                  items: selectedProducts.map((p) => {
                    return {
                      name: p.name,
                      quantity: 1,
                      price: p.price,
                    }
                  }),
                  isDelivery,
                  address: isDelivery ? address : undefined,
                }

                createNewOrder(orderData)

                e.currentTarget.reset()
                setSelectedProducts([])
                setIsDelivery(false)
              }}
            >
              <input
                name="customer"
                placeholder="Nome do cliente"
                className="rounded border p-2"
                required
              />
              <input
                name="phone"
                placeholder="Telefone"
                className="rounded border p-2"
                required
              />

              <DropdownMenu
                value={''}
                onValueChange={function (value: string): void {
                  throw new Error('Function not implemented.')
                }}
              >
                <DropdownMenuTrigger className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-200">
                  O que o cliente quer? <Filter className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Produtos:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {availableProducts.map((product, index) => (
                    <DropdownMenuItem
                      className="cursor-pointer capitalize"
                      value=""
                      key={index}
                      onSelect={() => {
                        if (
                          !selectedProducts.find((p) => p.name === product.name)
                        ) {
                          setSelectedProducts([...selectedProducts, product])
                        }
                      }}
                    >
                      {product.name} - R$ {product.price.toFixed(2)}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex flex-col gap-2">
                {selectedProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b p-2"
                  >
                    <span>{product.name}</span>
                    <span>R$ {product.price.toFixed(2)}</span>
                    <button
                      type="button"
                      className="ml-2 cursor-pointer text-red-600 hover:text-red-800"
                      onClick={() =>
                        setSelectedProducts((prev) =>
                          prev.filter((p) => p.name !== product.name)
                        )
                      }
                    >
                      Remover
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  className="cursor-pointer"
                  name="isDelivery"
                  checked={isDelivery}
                  id="isDelivery"
                  onCheckedChange={(checked) => setIsDelivery(!!checked)}
                >
                  Entrega
                </Checkbox>
                <label htmlFor="isDelivery" className="text-gray-700">
                  Serviço para o motoboy?
                </label>
              </div>

              {isDelivery && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    name="address"
                    placeholder="Endereço"
                    className="rounded border p-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-200 focus:border-orange-600 focus:shadow-lg focus:shadow-orange-200 focus:outline-none active:border-orange-600"
                    required
                  />
                </motion.div>
              )}

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewOrderOpen(false)}
                  className="cursor-pointer rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="cursor-pointer rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
                >
                  Criar Pedido
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  )
}
