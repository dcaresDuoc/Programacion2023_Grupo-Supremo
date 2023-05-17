import { SubSubCategory } from '../../../domain/entities/SubSubCategory'
import { SubSubCategoryRepository } from '../../../domain/repositories/SubSubCategoryRepository'

export class GetAllSubSubCategoriesUseCase {
  private readonly _subSubCategoryRepository: SubSubCategoryRepository

  constructor (subSubCategoryRepository: SubSubCategoryRepository) {
    this._subSubCategoryRepository = subSubCategoryRepository
  }

  async run (): Promise<SubSubCategory[]> {
    const subSubCategories = await this._subSubCategoryRepository.getAllSubSubCategories()
    return subSubCategories
  }
}
