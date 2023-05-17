import { ProductImage } from 'domain/entities/ProductImage'

export interface ProductImageRepository {
  getAllProductImages: () => Promise<ProductImage[]>
  createProductImage: (productImage: ProductImage) => Promise<void>
  updateProductImageById: (productImageId: string, productImage: ProductImage) => Promise<void>
  deleteProductImageById: (productImageId: string) => Promise<void>
  getProductImageById: (productImageId: string) => Promise<ProductImage | null>
}
