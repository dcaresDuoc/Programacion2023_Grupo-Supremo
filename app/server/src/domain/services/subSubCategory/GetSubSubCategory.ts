import { GetSubSubCategoryParams, SubSubCategorySelections } from '../../utils/interfaces'
import { SubSubCategory } from '../../entities/SubSubCategory'
import { SubSubCategoryRepository } from '../../repositories/SubSubCategoryRepository'

export class GetSubSubCategory {
  private readonly _subSubCategoryRepository: SubSubCategoryRepository

  constructor (subSubCategoryRepository: SubSubCategoryRepository) {
    this._subSubCategoryRepository = subSubCategoryRepository
  }

  async run (getSubSubCategoryParams: GetSubSubCategoryParams): Promise<SubSubCategory | null> {
    const subSubCategorySelections: SubSubCategorySelections = {}

    if (typeof getSubSubCategoryParams.selections === 'boolean') {
      subSubCategorySelections.id = true
      subSubCategorySelections.name = true
    } else {
      if (getSubSubCategoryParams.selections.id !== undefined) {
        subSubCategorySelections.id = getSubSubCategoryParams.selections.id
      }

      if (getSubSubCategoryParams.selections.name !== undefined) {
        subSubCategorySelections.name = getSubSubCategoryParams.selections.name
      }
    }

    const foundSubSubCategory = await this._subSubCategoryRepository.getSubSubCategory(getSubSubCategoryParams.condition, getSubSubCategoryParams.conditionValue, subSubCategorySelections)
    return foundSubSubCategory as SubSubCategory
  }
}
