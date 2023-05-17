import { FindSubSubCategoryConditions, FindSubSubCategoryValues, SubSubCategorySelections } from '../../../domain/utils/interfaces'
import { SubSubCategoryRepository } from '../../../domain/repositories/SubSubCategoryRepository'
import { SubSubCategory } from '../../../domain/entities/SubSubCategory'
import prismaClient from '../../prismaClient'

export class MySQLSubSubCategoryRepository implements SubSubCategoryRepository {
  async getAllSubSubCategories (): Promise<SubSubCategory[]> {
    const subSubCategories = await prismaClient.subSubCategory.findMany()
    return subSubCategories
  }

  async createSubSubCategory (subSubCategory: SubSubCategory): Promise<void> {
    await prismaClient.subSubCategory.create({
      data: subSubCategory
    })
  }

  async updateSubSubCategoryById (subSubCategoryId: string, subSubCategory: SubSubCategory): Promise<void> {
    await prismaClient.subSubCategory.update({
      where: {
        id: subSubCategoryId
      },
      data: subSubCategory
    })
  }

  async deleteSubSubCategoryById (subSubCategoryId: string): Promise<void> {
    await prismaClient.subSubCategory.delete({
      where: {
        id: subSubCategoryId
      }
    })
  }

  async getSubSubCategory (condition: FindSubSubCategoryConditions, conditionValue: FindSubSubCategoryValues, selections: SubSubCategorySelections): Promise<Partial<SubSubCategory> | null> {
    const foundSubSubCategory = await prismaClient.subSubCategory.findFirst({
      where: {
        [condition]: conditionValue
      },
      select: selections
    })
    return foundSubSubCategory
  }
}
