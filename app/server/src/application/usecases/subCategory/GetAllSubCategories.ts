import { SubCategory } from '../../../domain/entities/SubCategory'
import { SubCategoryRepository } from '../../../domain/repositories/SubCategoryRepository'

export class GetAllSubCategoriesUseCase {
  private readonly _subCategoryRepository: SubCategoryRepository

  constructor (subCategoryRepository: SubCategoryRepository) {
    this._subCategoryRepository = subCategoryRepository
  }

  async run (): Promise<SubCategory[]> {
    const subCategories = await this._subCategoryRepository.getAllSubCategories()
    return subCategories
  }
}
