'use server'

import { findAllProductsService } from '@/src/services/productsService'

export async function getAllProducts(page: number = 1, pageSize: number = 20) {
  const { products, totalProducts } = await findAllProductsService(
    page,
    pageSize
  )

  return { products, totalProducts }
}
