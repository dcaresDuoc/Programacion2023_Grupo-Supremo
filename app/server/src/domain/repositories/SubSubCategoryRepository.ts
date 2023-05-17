import { FindSubSubCategoryConditions, FindSubSubCategoryValues, SubSubCategorySelections } from '../utils/interfaces'
import { SubSubCategory } from '../entities/SubSubCategory'

export interface SubSubCategoryRepository {
  getAllSubSubCategories: () => Promise<SubSubCategory[]>
  createSubSubCategory: (subSubCategory: SubSubCategory) => Promise<void>
  updateSubSubCategoryById: (subSubCategoryId: string, subSubCategory: SubSubCategory) => Promise<void>
  deleteSubSubCategoryById: (subSubCategoryId: string) => Promise<void>
  getSubSubCategory: (condition: FindSubSubCategoryConditions, conditionValue: FindSubSubCategoryValues, selections: SubSubCategorySelections) => Promise<Partial<SubSubCategory> | null>
}
