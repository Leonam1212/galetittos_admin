import { findAllProductsService } from '@/src/services/productsService'
import ProductsContent from './components/ProductsContent'

export default async function Page() {
  const limit = 20
  const productsRequest = await findAllProductsService(1, limit)

  return (
    <>
      <ProductsContent productsRequest={productsRequest} />
    </>
  )
}
