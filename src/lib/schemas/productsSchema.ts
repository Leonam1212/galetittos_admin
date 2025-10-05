import { z } from 'zod'

export const productsCreateInputSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  quantity: z.number().min(1, 'Quantidade deve ser pelo menos 1'),
  price: z.number().min(1, 'Preço deve ser pelo menos 1'),
  description: z.string().optional(),
  type: z.enum(['GALETO']),
})

export const productsUpdateInputSchema = z.object({
  name: z.string().min(1).optional(),
  quantity: z.number().min(1).optional(),
  price: z.number().min(1).optional(),
  description: z.string().optional(),
  type: z.string().min(1).optional(),
})

export const productsResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number(),
  price: z.number(),
  description: z.string().nullable(),
  type: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
})

export type productsCreateInput = z.infer<typeof productsCreateInputSchema>
export type productsUpdateInput = z.infer<typeof productsUpdateInputSchema>
export type productsResponse = z.infer<typeof productsResponseSchema>
