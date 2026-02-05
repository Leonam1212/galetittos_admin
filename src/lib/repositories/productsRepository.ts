import { Products } from '../../generated/prisma'
import { prisma } from '../prisma'
import { productsCreateInput } from '../schemas/productsSchema'

const findAllProducts = async (
  page: number,
  pageSize: number
): Promise<{
  products: Products[]
  totalProducts: number
}> => {
  const products = prisma.products.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  const totalProducts = prisma.products.count()

  return Promise.all([products, totalProducts]).then(
    ([products, totalProducts]) => ({
      products,
      totalProducts,
    })
  )
}

const findProductById = async (id: string): Promise<Products | null> => {
  return prisma.products.findUnique({ where: { id } })
}

const createProduct = async (
  product: productsCreateInput
): Promise<Products> => {
  return prisma.products.create({ data: product })
}

const updateProduct = async (
  id: string,
  product: Products
): Promise<Products> => {
  return prisma.products.update({ where: { id }, data: product })
}

const deleteProduct = async (id: string): Promise<Products> => {
  return prisma.products.delete({ where: { id } })
}

export const productsRepository = {
  findAllProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}

export type productsRepository = typeof productsRepository
