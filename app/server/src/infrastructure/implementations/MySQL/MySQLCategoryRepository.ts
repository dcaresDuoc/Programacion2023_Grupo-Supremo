import { FindCategoryConditions, FindCategoryValues, CategorySelections } from '../../../domain/utils/interfaces'
import { CategoryRepository } from './../../../domain/repositories/CategoryRepository'
import { Category } from '../../../domain/entities/Category'
import prismaClient from '../../prismaClient'

export class MySQLCategoryRepository implements CategoryRepository {
  async getAllCategories (): Promise<Category[]> {
    const categories = await prismaClient.category.findMany()
    return categories
  }

  async createCategory (category: Category): Promise<void> {
    await prismaClient.category.create({
      data: category
    })
  }

  async updateCategoryById (categoryId: string, category: Category): Promise<void> {
    await prismaClient.category.update({
      where: {
        id: categoryId
      },
      data: category
    })
  }

  async deleteCategoryById (categoryId: string): Promise<void> {
    await prismaClient.category.delete({
      where: {
        id: categoryId
      }
    })
  }

  async getCategory (condition: FindCategoryConditions, conditionValue: FindCategoryValues, selections: CategorySelections): Promise<Partial<Category> | null> {
    const foundCategory = await prismaClient.category.findFirst({
      where: {
        [condition]: conditionValue
      },
      select: selections
    })
    return foundCategory
  }
}
