import { GetSubCategory } from '../../../domain/services/subCategory/GetSubCategory'
import { SubCategory } from '../../../domain/entities/SubCategory'
import { SubCategoryRepository } from '../../../domain/repositories/SubCategoryRepository'
import { CreateSubCategoryParams } from '../../../domain/utils/interfaces'
import { AlreadyExistsException } from '../../../domain/exceptions/AlreadyExistsException'
import { UuidGenerator } from '../../../domain/utils/UuidGenerator'

export class CreateSubCategoryUseCase {
  private readonly _subCategoryRepository: SubCategoryRepository
  private readonly _getSubCategory: GetSubCategory
  private readonly _uuidGenerator: UuidGenerator

  constructor (subCategoryRepository: SubCategoryRepository, uuidGenerator: UuidGenerator) {
    this._subCategoryRepository = subCategoryRepository
    this._getSubCategory = new GetSubCategory(subCategoryRepository)
    this._uuidGenerator = uuidGenerator
  }

  async run (params: CreateSubCategoryParams): Promise<SubCategory> {
    const foundSubCategory = await this._getSubCategory.run({ condition: 'name', conditionValue: params.subCategoryData.name, selections: { id: true } })
    if (foundSubCategory !== null) { throw new AlreadyExistsException() }

    const subCategory: SubCategory = { ...params.subCategoryData, id: this._uuidGenerator.generate() }
    await this._subCategoryRepository.createSubCategory(subCategory)
    return subCategory
  }
}
