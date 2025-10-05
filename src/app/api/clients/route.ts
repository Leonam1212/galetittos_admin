import { NextResponse } from 'next/server'
import { createError } from '../../../lib/utils/errorHandler'
import { auth } from '@/src/middleware/auth'
import {
  clientsCreateInputSchema,
  clientsUpdateInputSchema,
} from '@/src/lib/schemas/clientsSchema'
import {
  createClientService,
  deleteClientService,
  findAllClientsService,
  updateClientService,
} from '@/src/services/clientsService'

export const GET = auth(async () => {
  const clients = await findAllClientsService()
  return NextResponse.json({ clients })
})

export const POST = auth(async (req) => {
  const body = await req.json()

  // TODO NUMERO TEM QUE SER UNICO NO BANCO IMPLEMENTAR
  const parsedBody = clientsCreateInputSchema.safeParse(body)

  if (!parsedBody.success) {
    return NextResponse.json({ error: parsedBody.error }, { status: 400 })
  }

  const client = await createClientService(parsedBody.data)
  return NextResponse.json({ client })
})

export const DELETE = auth(async (req) => {
  const id = req.nextUrl.searchParams.get('id')
  if (!id) throw createError.notFound('ID não encontrado')
  await deleteClientService(id)
  return NextResponse.json({ message: 'Cliente deletado com sucesso' })
})

export const PATCH = auth(async (req) => {
  const id = req.nextUrl.searchParams.get('id')
  const body = await req.json()

  if (!id) throw createError.notFound('ID não encontrado')
  const parsedBody = clientsUpdateInputSchema.safeParse(body)
  if (!parsedBody.success) {
    return NextResponse.json({ error: parsedBody.error }, { status: 400 })
  }
  const client = await updateClientService(id, parsedBody.data)
  return NextResponse.json({ client })
})
