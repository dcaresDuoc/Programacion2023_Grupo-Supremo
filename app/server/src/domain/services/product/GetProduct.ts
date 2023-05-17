import { ProductSelections, GetProductParams } from '../../utils/interfaces'
import { ProductRepository } from '../../repositories/ProductRepository'
import { Product } from '../../entities/Product'

export class GetProduct {
  private readonly _productRespository: ProductRepository

  constructor (productRepository: ProductRepository) {
    this._productRespository = productRepository
  }

  /*
        id: getProductParams.selections.id ?? false,
      name: getProductParams.selections.name ?? false,
      description: getProductParams.selections.description ?? false,
      price: getProductParams.selections.price ?? false,
      brandId: getProductParams.selections.brandId ?? false,
      stock: getProductParams.selections.stock ?? false,
      categoryId: getProductParams.selections.categoryId ?? false,
      subCategoryId: getProductParams.selections.subCategoryId ?? false,
      subSubCategoryId: getProductParams.selections.subSubCategoryId ?? false
  */
  async run (getProductParams: GetProductParams): Promise<Product | null> {
    const productSelections: ProductSelections = {}

    if (typeof getProductParams.selections === 'boolean') {
      productSelections.id = true
      productSelections.name = true
      productSelections.description = true
      productSelections.price = true
      productSelections.brandId = true
      productSelections.stock = true
      productSelections.categoryId = true
      productSelections.subCategoryId = true
      productSelections.subSubCategoryId = true
    } else {
      if (getProductParams.selections.id !== undefined) {
        productSelections.id = getProductParams.selections.id
      }

      if (getProductParams.selections.name !== undefined) {
        productSelections.name = getProductParams.selections.name
      }

      if (getProductParams.selections.description !== undefined) {
        productSelections.description = getProductParams.selections.description
      }

      if (getProductParams.selections.price !== undefined) {
        productSelections.price = getProductParams.selections.price
      }

      if (getProductParams.selections.brandId !== undefined) {
        productSelections.brandId = getProductParams.selections.brandId
      }

      if (getProductParams.selections.stock !== undefined) {
        productSelections.stock = getProductParams.selections.stock
      }

      if (getProductParams.selections.categoryId !== undefined) {
        productSelections.categoryId = getProductParams.selections.categoryId
      }

      if (getProductParams.selections.subCategoryId !== undefined) {
        productSelections.subCategoryId = getProductParams.selections.subCategoryId
      }

      if (getProductParams.selections.subSubCategoryId !== undefined) {
        productSelections.subSubCategoryId = getProductParams.selections.subSubCategoryId
      }
    }

    const foundProduct = await this._productRespository.getProduct(getProductParams.condition, getProductParams.conditionValue, productSelections)
    return foundProduct as Product
  }
}
