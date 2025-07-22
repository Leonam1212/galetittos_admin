import { NextResponse } from 'next/server'
import { loginService } from '../../../services/authService'

export async function POST(request: Request) {
  const body = (await request.json()) as { email: string; password: string }
  const { email, password } = body
  const user = await loginService(email, password)
  if (!user) {
    return NextResponse.json(
      { error: 'Credenciais inválidas' },
      { status: 401 }
    )
  }
  //TODO lembrar de criar o token com JWT (mais seguro)
  const token = Buffer.from(`${user.id}:${user.email}`).toString('base64')

  console.log(token)

  const response = NextResponse.json({ user })
  response.cookies.set('auth_token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 dia
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })
  return response
}
