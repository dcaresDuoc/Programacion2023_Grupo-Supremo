import { SubSubCategory } from './../../../domain/entities/SubSubCategory'
import { GetSubSubCategory } from './../../../domain/services/subSubCategory/GetSubSubCategory'
import { SubSubCategoryRepository } from './../../../domain/repositories/SubSubCategoryRepository'
import { NotFoundException } from '../../../domain/exceptions/NotFoundException'

export class DeleteSubSubCategoryByIdUseCase {
  private readonly _subSubCategoryRepository: SubSubCategoryRepository
  private readonly _getSubSubCategory: GetSubSubCategory

  constructor (subSubCategoryRepository: SubSubCategoryRepository) {
    this._subSubCategoryRepository = subSubCategoryRepository
    this._getSubSubCategory = new GetSubSubCategory(subSubCategoryRepository)
  }

  async run (subSubCategoryId: string): Promise<SubSubCategory> {
    const foundSubSubCategory = await this._getSubSubCategory.run({ condition: 'id', conditionValue: subSubCategoryId, selections: true })

    if (foundSubSubCategory === null) {
      throw new NotFoundException()
    }

    this._subSubCategoryRepository.deleteSubSubCategoryById(subSubCategoryId)
    return foundSubSubCategory
  }
}
