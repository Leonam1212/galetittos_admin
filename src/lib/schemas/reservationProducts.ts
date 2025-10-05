import { z } from 'zod'

export const reservationProductsCreateInputSchema = z.object({
  reservation_id: z.string().min(1, 'ID da reserva é obrigatório'),
  product_id: z.string().min(1, 'ID do produto é obrigatório'),
  quantity: z.number().min(1, 'Quantidade deve ser pelo menos 1'),
  unit_price: z.number().min(1, 'Preço deve ser pelo menos 1'),
  total_price: z.number().min(1, 'Preço deve ser pelo menos 1'),
})

export const reservationProductsUpdateInputSchema = z.object({
  reservation_id: z.string().min(1).optional(),
  product_id: z.string().min(1).optional(),
  quantity: z.number().min(1).optional(),
  unit_price: z.number().min(1).optional(),
  total_price: z.number().min(1).optional(),
})

export const reservationProductsResponseSchema = z.object({
  id: z.string(),
  reservation_id: z.string(),
  product_id: z.string(),
  quantity: z.number(),
  unit_price: z.number(),
  total_price: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
})

export type reservationProductsCreateInput = z.infer<
  typeof reservationProductsCreateInputSchema
>
export type reservationProductsUpdateInput = z.infer<
  typeof reservationProductsUpdateInputSchema
>
export type reservationProductsResponse = z.infer<
  typeof reservationProductsResponseSchema
>
