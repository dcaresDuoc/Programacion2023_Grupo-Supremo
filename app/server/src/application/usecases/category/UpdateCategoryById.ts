import { NotFoundException } from '../../../domain/exceptions/NotFoundException'
import { GetCategory } from '../../../domain/services/category/GetCategory'
import { CategoryRepository } from '../../../domain/repositories/CategoryRepository'
import { Category } from '../../../domain/entities/Category'
import { UpdateCategoryByIdParams } from '../../../domain/utils/interfaces'

export class UpdateCategoryByIdUseCase {
  private readonly _categoryRespository: CategoryRepository
  private readonly _getCategory: GetCategory

  constructor (categoryRepository: CategoryRepository) {
    this._categoryRespository = categoryRepository
    this._getCategory = new GetCategory(categoryRepository)
  }

  async run (params: UpdateCategoryByIdParams): Promise<Category> {
    const foundCategory = await this._getCategory.run({ condition: 'id', conditionValue: params.categoryId, selections: true })

    if (foundCategory === null) {
      throw new NotFoundException()
    }

    const category: Category = {
      id: params.categoryId,
      name: params.categoryData.name ?? foundCategory.name
    }

    await this._categoryRespository.updateCategoryById(params.categoryId, category)
    return category
  }
}
