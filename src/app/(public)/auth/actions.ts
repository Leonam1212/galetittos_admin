'use server'

import { userCreateInputSchema } from '@/src/lib/schemas/userSchema'
import { loginService } from '@/src/services/authService'
import { createUserService } from '@/src/services/userService'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(email: string, password: string) {
  const nextCookies = await cookies()
  const { user, token, error } = await loginService(email, password)

  if (token !== null) {
    nextCookies.set('auth_token', token, { path: '/' })
    redirect('/dashboard')
  }

  return {
    user,
    token,
    error,
  }
}

export async function registerAction(
  name: string,
  email: string,
  password: string
) {
  const body = { name, email, password }
  const parsedBody = userCreateInputSchema.safeParse(body)

  if (!parsedBody.success) {
    return {
      user: null,
    }
  }

  const { user, error } = await createUserService(parsedBody.data)

  return {
    user,
    error,
  }
}
