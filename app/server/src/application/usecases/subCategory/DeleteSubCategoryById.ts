import { SubCategory } from '../../../domain/entities/SubCategory'
import { GetSubCategory } from '../../../domain/services/subCategory/GetSubCategory'
import { SubCategoryRepository } from '../../../domain/repositories/SubCategoryRepository'
import { NotFoundException } from '../../../domain/exceptions/NotFoundException'

export class DeleteSubCategoryByIdUseCase {
  private readonly _subCategoryRepository: SubCategoryRepository
  private readonly _getSubCategory: GetSubCategory

  constructor (subCategoryRepository: SubCategoryRepository) {
    this._subCategoryRepository = subCategoryRepository
    this._getSubCategory = new GetSubCategory(subCategoryRepository)
  }

  async run (subCategoryId: string): Promise<SubCategory> {
    const foundSubCategory = await this._getSubCategory.run({ condition: 'id', conditionValue: subCategoryId, selections: true })

    if (foundSubCategory === null) {
      throw new NotFoundException()
    }

    this._subCategoryRepository.deleteSubCategoryById(subCategoryId)
    return foundSubCategory
  }
}
