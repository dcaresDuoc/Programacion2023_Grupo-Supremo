import { ProductImage } from '../../../domain/entities/ProductImage'
import prismaClient from '../../prismaClient'
import { ProductImageRepository } from '../../../domain/repositories/ProductImageRepository'

export class MySQLProductImageRepository implements ProductImageRepository {
  async getAllProductImages (): Promise<ProductImage[]> {
    const productImages = await prismaClient.productImage.findMany()
    return productImages
  }

  async createProductImage (productImage: ProductImage): Promise<void> {
    await prismaClient.productImage.create({
      data: productImage
    })
  }

  async updateProductImageById (productImageId: string, productImage: ProductImage): Promise<void> {
    await prismaClient.productImage.update({
      where: {
        id: productImageId
      },
      data: productImage
    })
  }

  async deleteProductImageById (productImageId: string): Promise<void> {
    await prismaClient.productImage.delete({
      where: {
        id: productImageId
      }
    })
  }

  async getProductImageById (productImageId: string): Promise<ProductImage | null> {
    const foundProductImage = await prismaClient.productImage.findUnique({
      where: {
        id: productImageId
      }
    })
    return foundProductImage
  }
}
