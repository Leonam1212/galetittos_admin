import { NextResponse, NextRequest } from 'next/server'
import { auth } from '@/src/middleware/auth'
import { prisma } from '@/src/lib/prisma'
import { userRepository } from '@/src/lib/repositories/userRepository'

export const GET = async (req: NextRequest) => {
  try {
    //nessa luinha, eu to pegando o id do usuario com base na url
    const userId = req.nextUrl.searchParams.get('id')
    console.log(userId)

    if (!userId) {
      return NextResponse.json(
        { error: 'Usuário não autenticado' },
        { status: 401 }
      )
    }

    const user = await userRepository.findUserById(userId)

    if (!user) {
      return NextResponse.json(
        { error: 'Usuario não encontrado!' },
        { status: 401 }
      )
    }

    const reservations = await prisma.reservations.findMany({
      where: {
        user_id: userId,
      },
      include: {
        clients: true,
        ReservationProducts: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    return NextResponse.json({ success: true, data: reservations })
  } catch (err) {
    console.log('Erro ao buscar reservas:', err)
    return NextResponse.json(
      { error: 'Erro ao buscar reservas' },
      { status: 500 }
    )
  }
}
