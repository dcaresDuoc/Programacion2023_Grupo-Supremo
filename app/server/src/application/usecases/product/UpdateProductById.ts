import { GetProduct } from '../../../domain/services/product/GetProduct'
import { ProductRepository } from '../../../domain/repositories/ProductRepository'
import { Product } from '../../../domain/entities/Product'
import { UpdateProductByIdParams } from '../../../domain/utils/interfaces'
import { NotFoundException } from '../../../domain/exceptions/NotFoundException'

export class UpdateProductByIdUseCase {
  private readonly _productResposiory: ProductRepository
  private readonly _getProduct: GetProduct

  constructor (productRepository: ProductRepository) {
    this._productResposiory = productRepository
    this._getProduct = new GetProduct(productRepository)
  }

  async run (params: UpdateProductByIdParams): Promise<Product> {
    const foundProduct = await this._getProduct.run({ condition: 'id', conditionValue: params.productId, selections: true })
    if (foundProduct === null) {
      throw new NotFoundException()
    }

    const product: Product = {
      id: params.productId,
      name: params.productData.name ?? foundProduct.name,
      // TODO: Aún no hemos visto como actualizar imágenes, pero aquí se hace la lógica para ello
      description: params.productData.description ?? foundProduct.description,
      price: params.productData.price ?? foundProduct.price,
      brandId: params.productData.brandId ?? foundProduct.brandId,
      averageRating: params.productData.averageRating ?? foundProduct.averageRating,
      totalReviews: params.productData.totalReviews ?? foundProduct.totalReviews,
      stock: params.productData.stock ?? foundProduct.stock,
      categoryId: params.productData.categoryId ?? foundProduct.categoryId,
      subCategoryId: params.productData.subCategoryId ?? foundProduct.subCategoryId,
      subSubCategoryId: params.productData.subSubCategoryId ?? foundProduct.subSubCategoryId
    }

    await this._productResposiory.updateProductById(params.productId, product)
    return product
  }
}
