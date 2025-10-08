import { NextResponse, NextRequest } from 'next/server'
import { auth } from '@/src/middleware/auth'
import { Prisma } from '@/src/generated/prisma'

export const GET = auth(async (req: NextRequest) => {
  //1- aqui eu vou pegar o id do usuario logado
  //2- após pegar o id, eu vou verificar se ele tem alguma reserva
  //3- proximo passo é pegar as reservas do usuario usando o id , com o findUnique do Prisma
  //4- retornar as reservas
})

//dentro deste POST eu vou criar uma reserva
export const POST = auth(async (req: NextRequest) => {
  //1- aqui procedimento padrão, vou pegar o body da req
  //2- após pegar o body da req, vou criar uma reserva usando o Prisma
  //3- verificar se a reserva foi criada
  //4- retornar a reserva
})

export const DELETE = auth(async (req: NextRequest) => {
  //1- primeiramente vou pegar o id da reserva
  //2- proximo passo vou deletar a reserva
  //3- verificar se a reserva foi deletada
})

export const PATCH = auth(async (req: NextRequest) => {
  //1- primeiramente vou pegar o id da reserva
  //2- proximo passo vou atualizar a reserva
  //3- verificar se a reserva foi atualizada
  //4- retornar a reserva
})
