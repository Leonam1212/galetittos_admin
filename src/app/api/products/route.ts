import { NextResponse } from 'next/server'

import { createError } from '../../../lib/utils/errorHandler'
import {
  createProductService,
  deleteProductService,
  findAllProductsService,
  updateProductService,
} from '@/src/services/productsService'
import { auth } from '@/src/middleware/auth'
import {
  productsCreateInputSchema,
  productsUpdateInputSchema,
} from '@/src/lib/schemas/productsSchema'

export const GET = auth(async (req) => {
  const page = parseInt(req.nextUrl.searchParams.get('page') ?? '1', 10)
  const pageSize = parseInt(
    req.nextUrl.searchParams.get('pageSize') ?? '10',
    10
  )
  const { products, totalProducts } = await findAllProductsService(
    page,
    pageSize
  )
  return NextResponse.json({ products, totalProducts })
})
// esse export POST seria para criar um produto
export const POST = auth(async (req) => {
  const body = await req.json()
  const parsedBody = productsCreateInputSchema.safeParse(body)

  if (!parsedBody.success) {
    return NextResponse.json({ error: parsedBody.error }, { status: 400 })
  }

  const product = await createProductService(parsedBody.data)
  return NextResponse.json({ product })
})

export const DELETE = auth(async (req) => {
  const id = req.nextUrl.searchParams.get('id')
  if (!id) throw createError.notFound('ID não encontrado')
  await deleteProductService(id)
  return NextResponse.json({ message: 'Produto deletado com sucesso' })
})

export const PATCH = auth(async (req) => {
  const id = req.nextUrl.searchParams.get('id')
  const body = await req.json()
  if (!id) throw createError.notFound('ID não encontrado')
  const parsedBody = productsUpdateInputSchema.safeParse(body)
  if (!parsedBody.success) {
    return NextResponse.json({ error: parsedBody.error }, { status: 400 })
  }
  const product = await updateProductService(id, parsedBody.data)
  return NextResponse.json({ product })
})
