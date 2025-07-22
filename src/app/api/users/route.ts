import { NextResponse } from 'next/server'
import {
  deleteUserService,
  findAllUsersService,
} from '../../../services/userService'
import { auth } from '../../../middleware/auth'
import { createError } from '../../../lib/utils/errorHandler'

export const GET = auth(async () => {
  const users = await findAllUsersService()
  return NextResponse.json({ users })
})

export const DELETE = auth(async (req) => {
  const id = req.nextUrl.searchParams.get('id')
  if (!id) throw createError.notFound('ID não encontrado')
  await deleteUserService(id)
  return NextResponse.json({ message: 'Usuário deletado com sucesso' })
})
