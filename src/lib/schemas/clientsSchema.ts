import { z } from 'zod'

export const clientsCreateInputSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  cpf: z.string().min(11, 'CPF deve ter pelo menos 11 caracteres').optional(),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 caracteres'),
  email: z.email('Email inválido').optional(),
  address_id: z.string().optional(),
})

export const clientsUpdateInputSchema = z.object({
  name: z.string().min(1).optional(),
  cpf: z.string().min(11).optional(),
  phone: z.string().min(10).optional(),
  email: z.string().email().optional(),
  address_id: z.string().optional(),
})

export const clientsResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  cpf: z.string().nullable(),
  phone: z.string().nullable(),
  email: z.string().nullable(),
  address_id: z.string().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
})

export type ClientsCreateInput = z.infer<typeof clientsCreateInputSchema>
export type ClientsUpdateInput = z.infer<typeof clientsUpdateInputSchema>
export type ClientsResponse = z.infer<typeof clientsResponseSchema>
