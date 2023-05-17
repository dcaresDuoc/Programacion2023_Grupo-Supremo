import { FindSubCategoryConditions, FindSubCategoryValues, SubCategorySelections } from '../utils/interfaces'
import { SubCategory } from '../entities/SubCategory'

export interface SubCategoryRepository {
  getAllSubCategories: () => Promise<SubCategory[]>
  createSubCategory: (subCategory: SubCategory) => Promise<void>
  updateSubCategoryById: (subCategoryId: string, subCategory: SubCategory) => Promise<void>
  deleteSubCategoryById: (subCategoryId: string) => Promise<void>

  getSubCategory: (condition: FindSubCategoryConditions, conditionValue: FindSubCategoryValues, selections: SubCategorySelections) => Promise<Partial<SubCategory> | null>
}
