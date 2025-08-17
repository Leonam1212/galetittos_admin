'use client'
import { DollarSign, ShoppingCart, Download } from 'lucide-react'

const sundayData = [
  { date: '15/01/2024', pedidos: 45, receita: 1847.5, frangosVendidos: 52 },
  { date: '08/01/2024', pedidos: 38, receita: 1523.8, frangosVendidos: 43 },
  { date: '01/01/2024', pedidos: 42, receita: 1689.6, frangosVendidos: 48 },
  { date: '25/12/2023', pedidos: 52, receita: 2184.4, frangosVendidos: 61 },
  { date: '18/12/2023', pedidos: 39, receita: 1567.2, frangosVendidos: 44 },
]

export default function ReportsAnalytics() {
  const hoje = sundayData[0]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Análise dos Domingos
          </h1>
          <p className="text-gray-600">
            Relatório semanal da galeteria - Funcionamento apenas aos domingos
          </p>
        </div>
        <button className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          <Download className="mr-2 h-4 w-4" />
          Exportar
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Vendas Hoje</h3>
            <DollarSign className="h-4 w-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            R$ {hoje.receita.toFixed(2)}
          </div>
          <p className="text-xs text-gray-500">Total de vendas do domingo</p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Pedidos Hoje</h3>
            <ShoppingCart className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{hoje.pedidos}</div>
          <p className="text-xs text-gray-500">Pedidos realizados hoje</p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Frangos Vendidos
            </h3>
            <ShoppingCart className="h-4 w-4 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {hoje.frangosVendidos}
          </div>
          <p className="text-xs text-gray-500">Frangos vendidos hoje</p>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Histórico dos Últimos Domingos
          </h2>
          <p className="text-sm text-gray-600">
            Performance das últimas 5 semanas
          </p>
        </div>
        <div className="space-y-3">
          {sundayData.map((day, index) => (
            <div
              key={day.date}
              className={`rounded-lg border p-4 ${index === 0 ? 'border-orange-200 bg-orange-50' : 'bg-gray-50'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    {day.date} {index === 0 && '(Hoje)'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {day.pedidos} pedidos • {day.frangosVendidos} frangos
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    R$ {day.receita.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">vendas totais</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
