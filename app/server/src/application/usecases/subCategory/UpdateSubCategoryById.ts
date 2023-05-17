import { SubCategory } from '../../../domain/entities/SubCategory'
import { UpdateSubCategoryByIdParams } from '../../../domain/utils/interfaces'
import { GetSubCategory } from '../../../domain/services/subCategory/GetSubCategory'
import { SubCategoryRepository } from '../../../domain/repositories/SubCategoryRepository'
import { NotFoundException } from '../../../domain/exceptions/NotFoundException'

export class UpdateSubCategoryByIdUseCase {
  private readonly _subCategoryRepository: SubCategoryRepository
  private readonly _getSubCategory: GetSubCategory

  constructor (subCategoryRepository: SubCategoryRepository) {
    this._subCategoryRepository = subCategoryRepository
    this._getSubCategory = new GetSubCategory(subCategoryRepository)
  }

  async run (params: UpdateSubCategoryByIdParams): Promise<SubCategory> {
    const foundSubCategory = await this._getSubCategory.run({ condition: 'id', conditionValue: params.subCategoryId, selections: true })

    if (foundSubCategory === null) {
      throw new NotFoundException()
    }

    const subCategory: SubCategory = {
      id: params.subCategoryId,
      name: params.subCategoryData.name ?? foundSubCategory.name,
      categoryId: params.subCategoryData.categoryId ?? foundSubCategory.categoryId
    }

    await this._subCategoryRepository.updateSubCategoryById(params.subCategoryId, subCategory)
    return subCategory
  }
}
