import {
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react'

// Dados de pedidos recentes e tbm de estoque baixo, tu que se vira ae, paizão
const data = [
  {
    id: '#001',
    customer: 'João Silva',
    status: 'preparing',
    time: '10 min',
    total: 'R$ 45,90',
  },
  {
    id: '#002',
    customer: 'Maria Santos',
    status: 'ready',
    time: '5 min',
    total: 'R$ 32,50',
  },
  {
    id: '#003',
    customer: 'Pedro Costa',
    status: 'delivered',
    time: '2 min',
    total: 'R$ 67,80',
  },
  {
    id: '#004',
    customer: 'Ana Oliveira',
    status: 'preparing',
    time: '15 min',
    total: 'R$ 28,90',
  },
  {
    id: '#005',
    customer: 'Lucas Almeida',
    status: 'ready',
    time: '8 min',
    total: 'R$ 42,30',
  },
  {
    id: '#006',
    customer: 'Mariana Rodrigues',
    status: 'delivered',
    time: '3 min',
    total: 'R$ 55,70',
  },
  {
    id: '#007',
    customer: 'Rafael Santos',
    status: 'preparing',
    time: '12 min',
    total: 'R$ 38,90',
  },
  {
    id: '#008',
    customer: 'Fernanda Oliveira',
    status: 'ready',
    time: '7 min',
    total: 'R$ 31,50',
  },
  {
    id: '#009',
    customer: 'Guilherme Costa',
    status: 'delivered',
    time: '4 min',
    total: 'R$ 49,80',
  },
]
const recentOrders = data.slice(0, 10)

const stocksLow = [
  { name: 'Frango Inteiro', current: 5, min: 10, unit: 'unidades' },
  { name: 'Batata Frita', current: 2, min: 5, unit: 'kg' },
  { name: 'Refrigerante 2L', current: 8, min: 15, unit: 'unidades' },
  { name: 'Molho Especial', current: 1, min: 3, unit: 'litros' },
  { name: 'Pimenta', current: 3, min: 6, unit: 'unidades' },
  { name: 'Tomate', current: 4, min: 8, unit: 'kg' },
  { name: 'Ovos', current: 6, min: 10, unit: 'unidades' },
  { name: 'Cebola', current: 2, min: 5, unit: 'kg' },
].slice(0, 10)

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Visão geral da sua galeteria</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Pedidos Hoje</h3>
            <ShoppingCart className="h-4 w-4 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">00</div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Receita Hoje</h3>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">R$ {'00,00'}</div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Clientes Ativos
            </h3>
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{'00'}</div>
          {/* ae mironga, aqui vc se quiser bota quantos clientes foram botados no dia sla  */}
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Itens em Estoque
            </h3>
            <Package className="h-4 w-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{'00'}</div>
          {/*Aqui tu pode colocar quantos itens estão abaixo de 5 unidades, otaro*/}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Pedidos Recentes
            </h2>
            <p className="text-sm text-gray-600">Últimos pedidos realizados</p>
          </div>
          <div className="max-h-64 space-y-4 overflow-y-auto">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    {order.status === 'preparing' && (
                      <Clock className="h-4 w-4 text-orange-500" />
                    )}
                    {order.status === 'ready' && (
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    )}
                    {order.status === 'delivered' && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{order.customer}</p>
                    <p className="text-xs text-gray-500">
                      {order.id} • há {order.time}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{order.total}</p>
                  <span className="rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                    {order.status === 'preparing' && 'Preparando'}
                    {order.status === 'ready' && 'Pronto'}
                    {order.status === 'delivered' && 'Entregue'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Estoque Baixo
            </h2>
            <p className="text-sm text-gray-600">
              Itens que precisam de reposição
            </p>
          </div>
          <div className="max-h-64 space-y-4 overflow-y-auto">
            {stocksLow.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.current} {item.unit} restantes
                  </p>
                </div>
                <span className="rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                  Baixo
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
