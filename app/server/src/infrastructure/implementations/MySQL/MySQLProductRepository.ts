import { FindProductConditions, FindProductValues, ProductSelections } from './../../../domain/utils/interfaces'
import { Product } from '../../../domain/entities/Product'
import prismaClient from '../../prismaClient'
import { ProductRepository } from '../../../domain/repositories/ProductRepository'

export class MySQLProductRepository implements ProductRepository {
  async getAllProducts (): Promise<Product[]> {
    const products = await prismaClient.product.findMany()
    return products
  }

  async createProduct (product: Product): Promise<void> {
    await prismaClient.product.create({
      data: product
    })
  }

  async updateProductById (productId: string, product: Product): Promise<void> {
    await prismaClient.product.update({
      where: {
        id: productId
      },
      data: product
    })
  }

  async deleteProductById (productId: string): Promise<void> {
    await prismaClient.product.delete({
      where: {
        id: productId
      }
    })
  }

  async getProduct (condition: FindProductConditions, conditionValue: FindProductValues, selections: ProductSelections): Promise<Partial<Product> | null> {
    const foundProduct = await prismaClient.product.findFirst({
      where: {
        [condition]: conditionValue
      },
      select: selections
    })
    return foundProduct
  }
}
