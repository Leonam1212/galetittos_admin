import { z } from 'zod'

export const userCreateInputSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  cpf: z.string().optional(),
})

export const userUpdateInputSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  cpf: z.string().optional(),
})

export const userResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  cpf: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
})

export type UserCreateInput = z.infer<typeof userCreateInputSchema>
export type UserUpdateInput = z.infer<typeof userUpdateInputSchema>
export type UserResponse = z.infer<typeof userResponseSchema>
