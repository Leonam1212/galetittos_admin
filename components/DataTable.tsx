'use client'

import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface Column<T> {
  key: keyof T
  header: string
  render?: (value: any, item: T) => React.ReactNode
  mobileHidden?: boolean
  width?: string
  textAlign?: 'left' | 'center' | 'right'
}

interface PaginationProps {
  page: number
  pageSize: number
  total: number
  onPageChange: (page: number) => void
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  pagination: PaginationProps
  loading?: boolean
  error?: string | null
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  pagination,
  loading = false,
  error = null,
}: DataTableProps<T>) {
  const { page, pageSize, total, onPageChange } = pagination

  const totalPages = Math.ceil(total / pageSize)

  if (error) {
    return <div className="text-red-500">Erro: {error}</div>
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="space-y-4">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="cursor-auto">
              {columns.map((col) => (
                <TableHead
                  key={String(col.key)}
                  className={`px-2 py-1 text-center text-xs font-semibold whitespace-nowrap md:px-4 md:py-2 md:text-sm ${col.mobileHidden ? 'hidden md:table-cell' : ''}`}
                  style={{ width: col.width }}
                >
                  {col.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                {columns.map((col) => (
                  <TableCell
                    key={String(col.key)}
                    title={String(item[col.key])}
                    style={{ textAlign: col.textAlign || 'left' }}
                    className={`px-2 py-1 text-xs md:px-4 md:py-2 md:text-sm ${col.mobileHidden ? 'hidden md:table-cell' : ''}`}
                  >
                    {col.render
                      ? col.render(item[col.key], item)
                      : String(item[col.key])}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Mostrando {data.length} de {total} itens
        </div>
        <div className="flex items-center space-x-2">
          <Button
            className="cursor-pointer border-none"
            variant="outline"
            size="sm"
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Página {page} de {totalPages}
          </span>
          <Button
            className="cursor-pointer border-none"
            variant="outline"
            size="sm"
            onClick={() => onPageChange(page + 1)}
            disabled={page >= totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
