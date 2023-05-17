import { GetCategory } from '../../../domain/services/category/GetCategory'
import { CreateCategoryParams } from './../../../domain/utils/interfaces'
import { AlreadyExistsException } from '../../../domain/exceptions/AlreadyExistsException'
import { Category } from '../../../domain/entities/Category'
import { CategoryRepository } from '../../../domain/repositories/CategoryRepository'
import { UuidGenerator } from '../../../domain/utils/UuidGenerator'

export class CreateCategoryUseCase {
  private readonly _categoryRespository: CategoryRepository
  private readonly _getCategory: GetCategory
  private readonly _uuidGenerator: UuidGenerator

  constructor (categoryRepository: CategoryRepository, uuidGenerator: UuidGenerator) {
    this._categoryRespository = categoryRepository
    this._getCategory = new GetCategory(categoryRepository)
    this._uuidGenerator = uuidGenerator
  }

  async run (params: CreateCategoryParams): Promise<Category> {
    const foundCategory = await this._getCategory.run({ condition: 'name', conditionValue: params.categoryData.name, selections: { id: true } })
    if (foundCategory !== null) { throw new AlreadyExistsException() }

    const category: Category = { ...params.categoryData, id: this._uuidGenerator.generate() }
    await this._categoryRespository.createCategory(category)
    return category
  }
}
