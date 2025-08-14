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

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Gestão de Pedidos</h1>
        <p className="text-gray-600">Visão geral da sua galeteria</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Pendentes</h3>
            <ShoppingCart className="h-4 w-4 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">00</div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Frangos Prontos
            </h3>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">R$ {'00,00'}</div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Frangos Entregues
            </h3>
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{'00'}</div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Frangos/Estoque
            </h3>{' '}
            <Package className="h-4 w-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{'00'}</div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between gap-4">
          {/* AQUI TA O INPUT PARA PESQUISAR O CLIENT QUE FEZ O PEDIDO */}
          <div className="relative flex-1">
            <input
              placeholder="Buscar por cliente ou número do pedido..."
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm placeholder:text-gray-400 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              type="text"
            />
            <Search className="absolute top-2 left-3" />
          </div>

          {/* AQUI TA O DROPDOWN DO FILTER */}
          <div className="flex w-1/8 items-center justify-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="rounded-lg bg-gray-500 text-white hover:bg-gray-600">
                  <Filter className="h-4 w-4" />
                  Filtros
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-4">
        <div className="flex justify-center gap-4 rounded-xl p-2 shadow">
          <Button className="flex-1 bg-white font-bold text-black shadow hover:bg-gray-300 active:scale-95 active:bg-gray-500">
            Todos ({'0'})
          </Button>
          <Button className="flex-1 bg-white font-bold text-black shadow hover:bg-gray-300 active:scale-95 active:bg-gray-500">
            Ativos ({'0'})
          </Button>
          <Button className="flex-1 bg-white font-bold text-black shadow hover:bg-gray-300 active:scale-95 active:bg-gray-500">
            Finalizados ({'0'})
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center"></div>
      </div>
    </div>
  )
}
