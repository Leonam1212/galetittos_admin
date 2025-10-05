import { Products } from '../../generated/prisma'
import { prisma } from '../prisma'
import {
  productsCreateInput,
  productsResponse,
} from '../schemas/productsSchema'

const findAllProducts = async (): Promise<Products[]> => {
  return prisma.products.findMany()
}

const findProductById = async (id: string): Promise<Products | null> => {
  return prisma.products.findUnique({ where: { id } })
}

const createProduct = async (
  product: productsCreateInput
): Promise<Products> => {
  console.log('TO AQUI', product)
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
