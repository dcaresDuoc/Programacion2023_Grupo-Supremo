import { FindProductConditions, FindProductValues, ProductSelections } from '../utils/interfaces'
import { Product } from '../entities/Product'

export interface ProductRepository {
  getAllProducts: () => Promise<Product[]>
  // createProduct: (product: Product) => Promise<Product>
  createProduct: (product: Product) => Promise<void>
  updateProductById: (productId: string, product: Product) => Promise<void>
  deleteProductById: (productId: string) => Promise<void>
  getProduct: (condition: FindProductConditions, conditionValue: FindProductValues, selections: ProductSelections) => Promise<Partial<Product> | null>
}
