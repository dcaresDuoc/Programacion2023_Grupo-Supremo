import { FindSubCategoryConditions, FindSubCategoryValues, SubCategorySelections } from '../../../domain/utils/interfaces'
import { SubCategoryRepository } from '../../../domain/repositories/SubCategoryRepository'
import { SubCategory } from '../../../domain/entities/SubCategory'
import prismaClient from '../../prismaClient'

export class MySQLSubCategoryRepository implements SubCategoryRepository {
  async getAllSubCategories (): Promise<SubCategory[]> {
    const subCategories = await prismaClient.subCategory.findMany()
    return subCategories
  }

  async createSubCategory (subCategory: SubCategory): Promise<void> {
    await prismaClient.subCategory.create({
      data: subCategory
    })
  }

  async updateSubCategoryById (subCategoryId: string, subCategory: SubCategory): Promise<void> {
    await prismaClient.subCategory.update({
      where: {
        id: subCategoryId
      },
      data: subCategory
    })
  }

  async deleteSubCategoryById (subCategoryId: string): Promise<void> {
    await prismaClient.subCategory.delete({
      where: {
        id: subCategoryId
      }
    })
  }

  async getSubCategory (condition: FindSubCategoryConditions, conditionValue: FindSubCategoryValues, selections: SubCategorySelections): Promise<Partial<SubCategory> | null> {
    const foundSubCategory = await prismaClient.subCategory.findFirst({
      where: {
        [condition]: conditionValue
      },
      select: selections
    })
    return foundSubCategory
  }
}
