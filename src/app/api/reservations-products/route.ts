import { prisma } from '@/src/lib/prisma'
import { auth } from '@/src/middleware/auth'
import { NextRequest, NextResponse } from 'next/server'

export const POST = auth(async (req: NextRequest) => {
  try {
    console.log('Iniciando criação de reserva...')
    const body = await req.json()
    console.log('Corpo da requisição recebido:', JSON.stringify(body, null, 2))

    const { user_id, client_id, status, reservation_date, products } = body

    console.log('Validando dados da requisição...')
    console.log('user_id:', user_id)
    console.log('client_id:', client_id)
    console.log('status:', status)
    console.log('reservation_date:', reservation_date)
    console.log('products:', JSON.stringify(products, null, 2))

    const existsClient = await prisma.clients.findUnique({
      where: {
        id: client_id,
      },
    })
    if (!existsClient) {
      return NextResponse.json(
        { error: 'Cliente nao encontrado' },
        { status: 400 }
      )
    } else {
      console.log(existsClient)
    }

    const existsUser = await prisma.user.findUnique({
      where: { id: user_id },
    })
    if (!existsUser) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 400 }
      )
    }

    if (!user_id || !client_id || !status || !reservation_date) {
      return NextResponse.json(
        { error: 'Dados insuficientes' },
        { status: 400 }
      )
    }
    const reservation = await prisma.reservations.create({
      data: {
        user_id,
        client_id,
        status,
        reservation_date: new Date(reservation_date),
      },
    })

    const reservationProductsData = await Promise.all(
      products.map(async (product: any) => {
        const productFromDB = await prisma.products.findUnique({
          where: { id: product.id },
        })

        if (!productFromDB)
          throw new Error(`Produto ${product.id} não encontrado`)

        const total = productFromDB.price * product.quantity

        return {
          reservation_id: reservation.id,
          product_id: product.id,
          quantity: product.quantity,
          unit_price: productFromDB.price,
          total_price: total,
        }
      })
    )

    await prisma.reservationProducts.createMany({
      data: reservationProductsData,
    })

    return NextResponse.json({
      success: true,
      message: 'Reserva criada com sucesso',
      data: {
        reservation,
        reservationProducts: reservationProductsData,
      },
    })
  } catch (err) {
    console.error('Erro ao criar reserva', err)
    return NextResponse.json(
      { error: 'Erro ao criar reserva' },
      { status: 500 }
    )
  }
})
