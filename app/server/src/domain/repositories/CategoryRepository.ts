import { FindCategoryValues, FindCategoryConditions, CategorySelections } from '../utils/interfaces'
import { Category } from '../entities/Category'

export interface CategoryRepository {
  getAllCategories: () => Promise<Category[]>
  createCategory: (category: Category) => Promise<void>
  updateCategoryById: (categoryId: string, category: Category) => Promise<void>
  deleteCategoryById: (categoryId: string) => Promise<void>
  getCategory: (condition: FindCategoryConditions, conditionValue: FindCategoryValues, selections: CategorySelections) => Promise<Partial<Category> | null>
}
