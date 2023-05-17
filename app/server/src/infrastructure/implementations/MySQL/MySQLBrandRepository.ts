import { FindBrandConditions, FindBrandValues, BrandSelections } from '../../../domain/utils/interfaces'
import { BrandRepository } from '../../../domain/repositories/BrandRepository'
import { Brand } from '../../../domain/entities/Brand'
import prismaClient from '../../prismaClient'

export class MySQLBrandRepository implements BrandRepository {
  async getAllBrands (): Promise<Brand[]> {
    const brands = await prismaClient.brand.findMany()
    return brands
  }

  async createBrand (brand: Brand): Promise<void> {
    await prismaClient.brand.create({
      data: brand
    })
  }

  async updateBrandById (brandId: string, brand: Brand): Promise<void> {
    await prismaClient.brand.update({
      where: {
        id: brandId
      },
      data: brand
    })
  }

  async deleteBrandById (brandId: string): Promise<void> {
    await prismaClient.brand.delete({
      where: {
        id: brandId
      }
    })
  }

  async getBrand (condition: FindBrandConditions, conditionValue: FindBrandValues, selections: BrandSelections): Promise<Partial<Brand> | null> {
    const foundBrand = await prismaClient.brand.findFirst({
      where: {
        [condition]: conditionValue
      },
      select: selections
    })
    return foundBrand
  }
}
