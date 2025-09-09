'use client'

import { ShoppingCart, TrendingUp, Check, BanknoteArrowUp } from 'lucide-react'
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
    <>
      <div className="max-w-8xl relative ml-4 space-y-6 overflow-hidden p-10 font-bold md:p-4">
        <div>
          <div className="text-center text-3xl font-bold text-gray-900 md:text-left">
            <span className="relative text-orange-500">
              PAINEL {''}
              <div className="absolute bottom-0 left-[-5px] h-[.1px] w-full bg-orange-600"></div>
            </span>
            <span style={{ color: 'black' }}>DA GALETERIA</span>
          </div>
          <p className="mt-2 text-center text-lg text-gray-600 md:text-center md:text-left">
            Visão geral da sua galeteria
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-sm border-t border-r-1 border-l-1 border-gray-300 border-r-orange-600/30 border-l-orange-600/30 bg-white p-4 shadow-lg shadow-orange-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:text-orange-900">
                Pedidos pendentes
              </h3>
              <ShoppingCart className="h-4 w-4 text-orange-600 drop-shadow-lg transition-all duration-300 ease-in-out group-hover:scale-115" />
            </div>
            <div className="text-2xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-orange-600">
              {pendingOrders}
            </div>
          </div>

          <div className="group rounded-sm border-t border-r-1 border-l-1 border-gray-300 border-r-green-600/30 border-l-green-600/30 bg-white p-4 shadow-lg shadow-green-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:text-green-900">
                Ativos
              </h3>
              <TrendingUp className="h-4 w-4 text-green-600 transition-all duration-300 ease-in-out group-hover:scale-115" />
            </div>
            <div className="text-2xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-green-600">
              {activeOrders}
            </div>
          </div>

          <div className="group rounded-sm border-t border-r-1 border-l-1 border-gray-300 border-r-blue-600/30 border-l-blue-600/30 bg-white p-4 shadow-lg shadow-blue-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:text-blue-900">
                Finalizados
              </h3>
              <Check className="h-4 w-4 text-blue-600 transition-all duration-300 ease-in-out group-hover:scale-115" />
            </div>
            <div className="text-2xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-blue-600">
              {finishedOrders}
            </div>
          </div>

          <div className="group rounded-sm border-t border-r-1 border-l-1 border-gray-300 border-r-purple-600/30 border-l-purple-600/30 bg-white p-4 shadow-lg shadow-purple-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:text-purple-900">
                Receita total
              </h3>
              <BanknoteArrowUp className="h-4 w-4 text-purple-600 transition-all duration-300 ease-in-out group-hover:scale-115" />
            </div>
            <div className="text-2xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:text-purple-600">
              R$ {totalRevenue.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <span className="xl:max-w-8xl relative mx-auto mt-2 h-[.1px] w-full max-w-4xl bg-orange-600" />
    </>
  )
}
