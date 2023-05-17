import { SubCategorySelections, GetSubCategoryParams } from '../../utils/interfaces'
import { SubCategoryRepository } from '../../repositories/SubCategoryRepository'
import { SubCategory } from '../../entities/SubCategory'

export class GetSubCategory {
  private readonly _subCategoryRespository: SubCategoryRepository

  constructor (subCategoryRepository: SubCategoryRepository) {
    this._subCategoryRespository = subCategoryRepository
  }

  async run (getSubCategoryParams: GetSubCategoryParams): Promise<SubCategory | null> {
    const subCategorySelections: SubCategorySelections = {}

    if (typeof getSubCategoryParams.selections === 'boolean') {
      subCategorySelections.id = true
      subCategorySelections.name = true
    } else {
      if (getSubCategoryParams.selections.id !== undefined) {
        subCategorySelections.id = getSubCategoryParams.selections.id
      }

      if (getSubCategoryParams.selections.name !== undefined) {
        subCategorySelections.name = getSubCategoryParams.selections.name
      }
    }

    const foundSubCategory = await this._subCategoryRespository.getSubCategory(getSubCategoryParams.condition, getSubCategoryParams.conditionValue, subCategorySelections)
    return foundSubCategory as SubCategory
  }
}
