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

type OrderStatus = 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled'

interface SelectedProduct {
  name: string
  price: number
  quantity: number
}
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
  address?: {
    street: string
    number: string
    zip: string
    neighborhood: string
  }
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
    address: {
      street: 'Rua das Flores',
      number: '123',
      neighborhood: 'Centro',
      zip: '12345-678',
    },
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
    address: {
      street: 'Avenida Central',
      number: '456',
      zip: '23456-789',
      neighborhood: 'Centro',
    },
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
  const [chickenQuantity, setChickenQuantity] = useState<number>(0)

  const [selectedProducts, setSelectedProducts] = useState<
    { name: string; price: number; quantity: number }[]
  >([])
  const [isDelivery, setIsDelivery] = useState(false)

  const handleQuantityChange = (index: number, quantity: number) => {
    const newSelectedProducts = [...selectedProducts]
    newSelectedProducts[index].quantity = quantity
    setSelectedProducts(newSelectedProducts)
  }

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
    address?: {
      street: string
      number: string
      neighborhood: string
      zip: string
    }
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
    <div className="space-y-4 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            <span className="relative text-orange-500">
              GESTÃO{' '}
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-orange-600"></div>
            </span>
            DE PEDIDOS
          </h1>
          <p className="text-sm text-gray-600 md:text-base">
            Gerencie todos os pedidos da sua galeteria
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-2 sm:w-auto sm:grid-cols-2">
          <button
            onClick={() => setChickenQuantityModal(!chickenQuantityModal)}
            className="flex cursor-pointer items-center justify-center space-x-2 rounded-md bg-orange-600 px-3 py-2 text-white hover:bg-orange-700 sm:px-4"
          >
            <Plus className="h-4 w-4" />
            <span className="text-xs font-semibold sm:text-sm">
              Quantidade de frango
            </span>
          </button>

          <button
            onClick={() => setIsNewOrderOpen(true)}
            className="flex cursor-pointer items-center justify-center space-x-2 rounded-md bg-orange-600 px-3 py-2 text-white hover:bg-orange-700 sm:px-4"
          >
            <Plus className="h-4 w-4" />
            <span className="text-xs font-semibold sm:text-sm">
              Novo Pedido
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        <div className="group rounded-sm border border-gray-300 bg-white p-3 shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md md:p-4">
          <div className="mb-1 flex items-center justify-between md:mb-2">
            <h3 className="text-xs font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:text-orange-900 md:text-sm">
              Total de Frangos
            </h3>
            <Eye className="h-3 w-3 text-blue-600 md:h-4 md:w-4" />
          </div>
          <div className="text-xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600 md:text-2xl">
            {chickenQuantity}
          </div>
        </div>

        <div className="group rounded-sm border border-gray-300 bg-white p-3 shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md md:p-4">
          <div className="mb-1 flex items-center justify-between md:mb-2">
            <h3 className="text-xs font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:text-orange-900 md:text-sm">
              Clientes Pendentes
            </h3>
            <AlertTriangle className="h-3 w-3 text-blue-600 md:h-4 md:w-4" />
          </div>
          <div className="text-xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600 md:text-2xl">
            {getOrdersByStatus('pending').length}
          </div>
        </div>

        <div className="group rounded-sm border border-gray-300 bg-white p-3 shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md md:p-4">
          <div className="mb-1 flex items-center justify-between md:mb-2">
            <h3 className="text-xs font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:text-orange-900 md:text-sm">
              Frangos Prontos
            </h3>
            <AlertTriangle className="h-3 w-3 text-blue-600 md:h-4 md:w-4" />
          </div>
          <div className="text-xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600 md:text-2xl">
            {getOrdersByStatus('ready').length}
          </div>
        </div>

        <div className="group rounded-sm border border-gray-300 bg-white p-3 shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md md:p-4">
          <div className="mb-1 flex items-center justify-between md:mb-2">
            <h3 className="text-xs font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:text-orange-900 md:text-sm">
              Entregados
            </h3>
            <CheckCircle className="h-3 w-3 text-green-600 md:h-4 md:w-4" />
          </div>
          <div className="text-xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600 md:text-2xl">
            {getOrdersByStatus('delivered').length}
          </div>
        </div>

        <div className="group rounded-sm border border-gray-300 bg-white p-3 shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md md:p-4 lg:col-span-1">
          <div className="mb-1 flex items-center justify-between md:mb-2">
            <h3 className="text-xs font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:text-orange-900 md:text-sm">
              Cancelados
            </h3>
            <AlertTriangle className="h-3 w-3 text-red-600 md:h-4 md:w-4" />
          </div>
          <div className="text-xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600 md:text-2xl">
            {getOrdersByStatus('cancelled').length}
          </div>
        </div>
      </div>

      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar pedido"
        className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-600 transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-orange-200 focus:border-orange-600 focus:shadow-md focus:shadow-orange-200 focus:outline-none active:border-orange-600 md:px-4 md:text-base"
      />

      <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow md:p-6">
        {getOrdersForActiveTab().length > 0 ? (
          getOrdersForActiveTab().map((order) => (
            <div
              key={order.id}
              className="mb-4 grid grid-cols-1 gap-4 rounded-xl border border-gray-300 bg-gray-50 p-4 transition-all duration-300 hover:shadow-md lg:grid-cols-4"
            >
              <div className="rounded-lg bg-white p-3 shadow-sm md:p-4">
                <h2 className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase md:mb-2 md:text-sm">
                  Cliente
                </h2>
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4 text-gray-600 md:mr-2 md:h-5 md:w-5" />
                  <p className="text-base font-bold text-gray-800 md:text-lg">
                    {order.customer}
                  </p>
                </div>
                <div className="mt-1 flex items-center md:mt-2">
                  <Phone className="mr-1 h-4 w-4 text-gray-600 md:mr-2 md:h-5 md:w-5" />
                  <p className="text-xs text-gray-700 md:text-sm">
                    {order.phone}
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm md:p-4 lg:col-span-2">
                <h2 className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase md:mb-2 md:text-sm">
                  Detalhes
                </h2>

                <div>
                  <div className="mb-2 md:mb-4">
                    <h3 className="mb-1 text-sm font-semibold text-gray-800 md:text-base">
                      Pedido
                    </h3>
                    <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700 md:pl-5 md:text-sm">
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.quantity}x {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {order.isDelivery && order.address && (
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-gray-800 md:text-base">
                        Endereço
                      </h3>
                      <div className="flex items-start">
                        <MapPin className="mt-[2px] mr-1 h-4 w-4 text-gray-600 md:mr-2 md:h-5 md:w-5" />
                        <p className="text-xs leading-snug text-gray-700 md:text-sm">
                          {order.address.street}, {order.address.number} -{' '}
                          {order.address.neighborhood}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-lg bg-white p-3 shadow-sm md:p-4">
                <div className="mb-2 text-center md:mb-4">
                  <h2 className="text-sm font-semibold text-gray-800 md:text-base">
                    Preço Total
                  </h2>
                  <span className="mt-1 text-xl font-bold text-orange-600 md:text-2xl">
                    R$ {order.total.toFixed(2)}
                  </span>
                </div>

                <DropdownMenu
                  value={''}
                  onValueChange={function (value: string): void {
                    throw new Error('Function not implemented.')
                  }}
                >
                  <DropdownMenuTrigger className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border border-gray-300 bg-gray-100 px-2 py-1 text-xs text-gray-700 transition-colors hover:bg-gray-200 md:gap-2 md:px-4 md:py-2 md:text-sm">
                    {getStatusText(order.status)} {getStatusIcon(order.status)}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel className="text-xs md:text-sm">
                      Situação:
                    </DropdownMenuLabel>
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
                        className="cursor-pointer text-xs capitalize md:text-sm"
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
          <p className="py-6 text-center text-sm text-gray-600 md:text-base">
            Nenhum pedido encontrado.
          </p>
        )}
      </div>

      {chickenQuantityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className="w-11/12 max-w-md rounded-lg bg-white p-4 shadow-lg md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between md:mb-4">
              <h2 className="text-lg font-bold text-gray-900 md:text-xl">
                Definir Quantidade de Frangos do Dia
              </h2>
              <button
                onClick={() => setChickenQuantityModal(false)}
                className="cursor-pointer text-gray-600 hover:text-gray-900"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="space-y-3 md:space-y-4">
              <label className="block text-xs font-medium text-gray-700 md:text-sm">
                Quantidade disponível:
              </label>
              <input
                type="number"
                min={0}
                value={chickenQuantity}
                onChange={(e) =>
                  setChickenQuantity(Math.max(0, parseInt(e.target.value) || 0))
                }
                className="no-spinner w-full rounded border border-gray-300 p-2 text-center text-base font-bold outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600 md:text-lg"
              />
            </div>

            <div className="mt-4 flex justify-end gap-2 md:mt-6 md:gap-3">
              <button
                onClick={() => setChickenQuantityModal(false)}
                className="cursor-pointer rounded-md bg-gray-200 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-300 md:px-4 md:py-2 md:text-sm"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setChickenQuantityModal(false)
                }}
                className="cursor-pointer rounded-md bg-orange-600 px-3 py-1.5 text-xs text-white hover:bg-orange-700 md:px-4 md:py-2 md:text-sm"
              >
                Confirmar
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        >
          <div
            className="w-11/12 max-w-2xl rounded-lg bg-white p-4 shadow-lg md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between md:mb-4">
              <h2 className="text-lg font-bold text-gray-900 md:text-xl">
                Novo Pedido
              </h2>
              <button
                onClick={() => setIsNewOrderOpen(false)}
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

                createNewOrder(
                  orderData as {
                    customer: string
                    phone: string
                    items: { name: string; quantity: number; price: number }[]
                    isDelivery: boolean
                    address?: {
                      street: string
                      number: string
                      neighborhood: string
                      zip: string
                    }
                  }
                )

                e.currentTarget.reset()
                setSelectedProducts([])
                setIsDelivery(false)
              }}
            >
              <input
                name="customer"
                placeholder="Nome do cliente"
                className="rounded border p-2 text-sm md:text-base"
                required
              />
              <input
                name="phone"
                placeholder="Telefone"
                className="rounded border p-2 text-sm md:text-base"
                required
              />

              <DropdownMenu
                value={''}
                onValueChange={function (value: string): void {
                  throw new Error('Function not implemented.')
                }}
              >
                <DropdownMenuTrigger className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border border-gray-300 bg-gray-100 px-2 py-1.5 text-xs text-gray-700 transition-colors hover:bg-gray-200 md:gap-2 md:px-4 md:py-2 md:text-sm">
                  O que o cliente quer?{' '}
                  <Filter className="h-3 w-3 md:h-4 md:w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-h-60 overflow-y-auto">
                  <DropdownMenuLabel className="text-xs md:text-sm">
                    Produtos:
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {availableProducts.map((product, index) => (
                    <DropdownMenuItem
                      className="flex cursor-pointer items-center justify-between text-xs capitalize md:text-sm"
                      value=""
                      key={index}
                      onSelect={() => {
                        if (
                          !selectedProducts.find((p) => p.name === product.name)
                        ) {
                          setSelectedProducts([
                            ...selectedProducts,
                            { ...product, quantity: 1 },
                          ])
                        }
                      }}
                    >
                      <span>{product.name}</span>
                      <span>R$ {product.price.toFixed(2)}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex max-h-32 flex-col gap-1 overflow-y-auto p-1 md:max-h-40 md:gap-2 md:p-2">
                {selectedProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b p-1 text-xs md:p-2 md:text-sm"
                  >
                    <span className="max-w-[100px] truncate md:max-w-none">
                      {product.name}
                    </span>
                    <div className="flex items-center">
                      <label className="mr-1" htmlFor="quantity">
                        Qtd:
                      </label>
                      <input
                        className="no-spinner w-12 rounded bg-gray-100 p-1 text-center font-bold outline-none md:w-16"
                        type="number"
                        name="quantity"
                        id="quantity"
                        value={product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            index,
                            Math.max(0, parseInt(e.target.value))
                          )
                        }
                      />
                    </div>
                    <span>R$ {product.price.toFixed(2)}</span>
                    <button
                      type="button"
                      className="ml-1 cursor-pointer text-red-600 hover:text-red-800 md:ml-2"
                      onClick={() =>
                        setSelectedProducts((prev) =>
                          prev.filter((p) => p.name !== product.name)
                        )
                      }
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="text-right text-sm font-bold md:text-base">
                Preço Total: R${' '}
                {selectedProducts && selectedProducts.length === 0
                  ? '0.00'
                  : selectedProducts
                      .reduce(
                        (sum, item) =>
                          sum +
                          (item.quantity > 0 ? item.price * item.quantity : 0),
                        0
                      )
                      .toFixed(2)}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  className="cursor-pointer border-black text-gray-700 hover:text-gray-900 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
                  name="isDelivery"
                  checked={isDelivery}
                  id="isDelivery"
                  onCheckedChange={(checked) => setIsDelivery(!!checked)}
                />
                <label
                  htmlFor="isDelivery"
                  className="cursor-pointer text-xs text-gray-700 md:text-sm"
                >
                  Serviço para o motoboy?
                </label>
              </div>

              {isDelivery && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                    <input
                      name="address"
                      placeholder="Bairro"
                      className="w-full rounded border p-2 text-sm transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-orange-200 focus:border-orange-600 focus:shadow-md focus:shadow-orange-200 focus:outline-none active:border-orange-600 md:text-base"
                      required
                    />

                    <input
                      name="address"
                      placeholder="Rua"
                      className="w-full rounded border p-2 text-sm transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-orange-200 focus:border-orange-600 focus:shadow-md focus:shadow-orange-200 focus:outline-none active:border-orange-600 md:text-base"
                      required
                    />

                    <input
                      name="address"
                      placeholder="Número"
                      className="w-full rounded border p-2 text-sm transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-orange-200 focus:border-orange-600 focus:shadow-md focus:shadow-orange-200 focus:outline-none active:border-orange-600 md:text-base"
                      required
                    />
                  </div>
                </motion.div>
              )}

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewOrderOpen(false)}
                  className="cursor-pointer rounded bg-gray-200 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-300 md:px-4 md:py-2 md:text-sm"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="cursor-pointer rounded bg-orange-600 px-3 py-1.5 text-xs text-white hover:bg-orange-700 md:px-4 md:py-2 md:text-sm"
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
