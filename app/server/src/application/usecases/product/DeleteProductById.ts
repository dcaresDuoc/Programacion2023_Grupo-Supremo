import { GetProduct } from '../../../domain/services/product/GetProduct'
import { Product } from '../../../domain/entities/Product'
import { ProductRepository } from '../../../domain/repositories/ProductRepository'
import { NotFoundException } from '../../../domain/exceptions/NotFoundException'

export class DeleteProductByIdUseCase {
  private readonly _productRespository: ProductRepository
  private readonly _getProduct: GetProduct

  constructor (productRepository: ProductRepository) {
    this._productRespository = productRepository
    this._getProduct = new GetProduct(productRepository)
  }

  async run (productId: string): Promise<Product> {
    const foundProduct = await this._getProduct.run({ condition: 'id', conditionValue: productId, selections: true })

    if (foundProduct === null) {
      throw new NotFoundException()
    }

    this._productRespository.deleteProductById(productId)

    return foundProduct
  }
}
