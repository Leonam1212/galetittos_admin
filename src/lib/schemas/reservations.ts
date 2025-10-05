import { z } from 'zod'

export const reservationsCreateInputSchema = z.object({
  client_id: z.string().min(1, 'ID do cliente é obrigatório'),
  status: z.string().min(1, 'Status é obrigatório'),
  user_id: z.string().min(1, 'ID do usuário é obrigatório'),
  reservation_date: z.string().min(1, 'Data da reserva é obrigatória'),
})

export const reservationsUpdateInputSchema = z.object({
  status: z.string().min(1).optional(),
})

export const reservationsResponseSchema = z.object({
  id: z.string(),
  client_id: z.string(),
  status: z.string(),
  user_id: z.string(),
  reservation_date: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
})

export type reservationsCreateInput = z.infer<
  typeof reservationsCreateInputSchema
>
export type reservationsUpdateInput = z.infer<
  typeof reservationsUpdateInputSchema
>
export type reservationsResponse = z.infer<typeof reservationsResponseSchema>
