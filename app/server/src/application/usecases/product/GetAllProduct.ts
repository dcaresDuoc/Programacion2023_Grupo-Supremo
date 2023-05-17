import { Product } from '../../../domain/entities/Product'
import { ProductRepository } from '../../../domain/repositories/ProductRepository'

export class GetAllProductUseCase {
  private readonly _productRespository: ProductRepository

  constructor (productRepository: ProductRepository) {
    this._productRespository = productRepository
  }

  async run (): Promise<Product[]> {
    const products = await this._productRespository.getAllProducts()
    return products
  }
}
