import { Category } from '../../entities/Category'
import { GetCategoryParams, CategorySelections } from '../../utils/interfaces'
import { CategoryRepository } from '../../repositories/CategoryRepository'

export class GetCategory {
  private readonly _categoryRespository: CategoryRepository

  constructor (categoryRepository: CategoryRepository) {
    this._categoryRespository = categoryRepository
  }

  async run (getCategoryParams: GetCategoryParams): Promise<Category | null> {
    /* const categorySelections: CategorySelections = { id: getCategoryParams.selections.id ?? false, name: getCategoryParams.selections.name ?? false } */

    const categorySelections: CategorySelections = {}

    if (typeof getCategoryParams.selections === 'boolean') {
      categorySelections.id = true
      categorySelections.name = true
    } else {
      if (getCategoryParams.selections.id !== undefined) {
        categorySelections.id = getCategoryParams.selections.id
      }

      if (getCategoryParams.selections.name !== undefined) {
        categorySelections.name = getCategoryParams.selections.name
      }
    }

    const foundCategory = await this._categoryRespository.getCategory(getCategoryParams.condition, getCategoryParams.conditionValue, categorySelections)
    return foundCategory as Category
  }
}
