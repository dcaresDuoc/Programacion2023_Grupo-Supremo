import { NotFoundException } from '../../../domain/exceptions/NotFoundException'
import { CategoryRepository } from '../../../domain/repositories/CategoryRepository'
import { GetCategory } from '../../../domain/services/category/GetCategory'
import { Category } from '../../../domain/entities/Category'

export class DeleteCategoryByIdUseCase {
  private readonly _categoryRepository: CategoryRepository
  private readonly _getCategory: GetCategory

  constructor (categoryRepository: CategoryRepository) {
    this._categoryRepository = categoryRepository
    this._getCategory = new GetCategory(categoryRepository)
  }

  async run (categoryId: string): Promise<Category> {
    const foundCategory = await this._getCategory.run({ condition: 'id', conditionValue: categoryId, selections: true })

    if (foundCategory === null) {
      throw new NotFoundException()
    }

    this._categoryRepository.deleteCategoryById(categoryId)
    return foundCategory
  }
}
