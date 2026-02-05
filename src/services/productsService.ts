import { createError } from '../lib/utils/errorHandler'
import { productsRepository } from '../lib/repositories/productsRepository'

export const findAllProductsService = async (
  page: number,
  pageSize: number
) => {
  const { products, totalProducts } = await productsRepository.findAllProducts(
    page,
    pageSize
  )
  return {
    products,
    totalProducts,
  }
}

export const createProductService = async (product: any) => {
  return productsRepository.createProduct(product)
}

export const updateProductService = (id: string, product: any) => {
  return productsRepository.updateProduct(id, product)
}

export const deleteProductService = async (id: string) => {
  const product = await productsRepository.findProductById(id)
  if (!product) {
    throw createError.notFound('Produto não encontrado')
  }
  return productsRepository.deleteProduct(id)
}
