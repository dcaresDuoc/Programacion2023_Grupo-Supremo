import { Category } from '../../../domain/entities/Category'
import { CategoryRepository } from '../../../domain/repositories/CategoryRepository'

export class GetAllCategoriesUseCase {
  private readonly _categoryRespository: CategoryRepository

  constructor (categoryRepository: CategoryRepository) {
    this._categoryRespository = categoryRepository
  }

  async run (): Promise<Category[]> {
    const categories = await this._categoryRespository.getAllCategories()
    return categories
  }
}
