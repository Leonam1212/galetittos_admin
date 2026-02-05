'use client'

import { Column, DataTable } from '@/components/DataTable'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Products } from '@/src/generated/prisma'
import { Filter, Plus, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../actions'

type ProductsContentProps = {
  productsRequest: {
    products: Products[]
    totalProducts: number
  }
}

export default function ProductsContent({
  productsRequest,
}: ProductsContentProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState<Products[]>(productsRequest.products)
  const [totalProducts, setTotalProducts] = useState(
    productsRequest.totalProducts
  )
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      setError(null)
      try {
        const response = await getAllProducts(page, pageSize)
        if (!response) {
          throw new Error('Erro ao buscar produtos')
        }

        setProducts(response.products)
        setTotalProducts(response.totalProducts)
      } catch (err: any) {
        setError(err.message || 'Erro desconhecido')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [page, pageSize])

  return (
    <div className="mt-20 flex flex-col justify-center gap-10 pr-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">PRODUTOS</h1>
          <p className="text-sm opacity-60">Controle de estoque e preço</p>
        </div>
        <Button className="cursor-pointer" variant="default">
          <Plus className="h-4 w-4" />
          Novo Produto
        </Button>
      </div>

      <form className="flex flex-col gap-6 rounded border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-500">
          <Filter size={14} />
          FILTROS
        </div>

        <div className="flex items-center justify-start gap-4">
          <div className="w-full">
            <Label className="mb-2 block text-xs">Produto</Label>
            <Input
              type="text"
              placeholder="Ex: Galeto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="w-4/12">
            <Label className="mb-2 block text-xs">Tipo</Label>
            <Input type="text" value={searchTerm} />
          </div>
          <div className="w-2/12">
            <Label className="mb-2 block text-xs">Quantidade</Label>
            <Input type="number" min="0" max="999" value={searchTerm} />
          </div>
          <div className="w-2/12">
            <Label className="mb-2 block text-xs">Preço</Label>
            <Input type="text" />
          </div>
          <div className="w-[11%]">
            <Label className="mb-2 block text-xs">Data</Label>
            <Input type="date" />
          </div>

          <div className="mt-6 flex items-center justify-end">
            <Button
              type="button"
              className="w-fit cursor-pointer"
              variant="default"
            >
              <Search size={14} />
            </Button>
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-6 rounded border border-gray-200 p-4 shadow-sm">
        <DataTable
          data={products}
          columns={columns}
          pagination={{
            page,
            pageSize,
            total: totalProducts,
            onPageChange: setPage,
          }}
          error={error}
        />
      </div>
    </div>
  )
}

const columns: Column<Products>[] = [
  { key: 'name', header: 'Nome', width: '17%' },
  {
    key: 'description',
    header: 'Descrição',
    width: '17%',
    render: (value: string) => (
      <span className="flex">{value.slice(0, 20) + '...'}</span>
    ),
  },
  { key: 'type', header: 'Tipo', width: '17%' },
  {
    key: 'quantity',
    header: 'Quantidade',
    width: '17%',
    textAlign: 'center',
  },
  {
    key: 'price',
    header: 'Preço',
    width: '17%',
    textAlign: 'center',
    render: (value: number) => `R$ ${value.toFixed(2)}`,
  },

  {
    key: 'event_date',
    header: 'Data',
    width: '17%',
    textAlign: 'center',
    render: (value: Date | null) =>
      value ? new Date(value).toLocaleDateString() : 'N/A',
  },
]
