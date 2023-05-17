import { UpdateSubSubCategoryByIdParams } from '../../../domain/utils/interfaces'
import { GetSubSubCategory } from '../../../domain/services/subSubCategory/GetSubSubCategory'
import { SubSubCategoryRepository } from '../../../domain/repositories/SubSubCategoryRepository'
import { SubSubCategory } from '../../../domain/entities/SubSubCategory'
import { NotFoundException } from '../../../domain/exceptions/NotFoundException'

export class UpdateSubSubCategoryByIdUseCase {
  private readonly _subSubCategoryRepository: SubSubCategoryRepository
  private readonly _getSubSubCategory: GetSubSubCategory

  constructor (subSubCategoryRepository: SubSubCategoryRepository) {
    this._subSubCategoryRepository = subSubCategoryRepository
    this._getSubSubCategory = new GetSubSubCategory(subSubCategoryRepository)
  }

  async run (params: UpdateSubSubCategoryByIdParams): Promise<SubSubCategory> {
    const foundSubSubCategory = await this._getSubSubCategory.run({ condition: 'id', conditionValue: params.subSubCategoryId, selections: true })

    if (foundSubSubCategory === null) {
      throw new NotFoundException()
    }

    console.log('foundSubSubCategory')
    console.log(foundSubSubCategory)

    const subSubCategory: SubSubCategory = {
      id: params.subSubCategoryId,
      name: params.subSubCategoryData.name ?? foundSubSubCategory.name,
      subCategoryId: params.subSubCategoryData.subCategoryId ?? foundSubSubCategory.subCategoryId
    }

    await this._subSubCategoryRepository.updateSubSubCategoryById(params.subSubCategoryId, subSubCategory)
    return subSubCategory
  }
}
