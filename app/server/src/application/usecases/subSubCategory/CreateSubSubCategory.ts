import { CreateSubSubCategoryParams } from '../../../domain/utils/interfaces'
import { GetSubSubCategory } from '../../../domain/services/subSubCategory/GetSubSubCategory'
import { SubSubCategory } from '../../../domain/entities/SubSubCategory'
import { SubSubCategoryRepository } from './../../../domain/repositories/SubSubCategoryRepository'
import { AlreadyExistsException } from '../../../domain/exceptions/AlreadyExistsException'
import { UuidGenerator } from '../../../domain/utils/UuidGenerator'

export class CreateSubSubCategoryUseCase {
  private readonly _subSubCategoryRepository: SubSubCategoryRepository
  private readonly _getSubSubCategory: GetSubSubCategory
  private readonly _uuidGenerator: UuidGenerator

  constructor (subSubCategoryRepository: SubSubCategoryRepository, uuidGenerator: UuidGenerator) {
    this._subSubCategoryRepository = subSubCategoryRepository
    this._getSubSubCategory = new GetSubSubCategory(subSubCategoryRepository)
    this._uuidGenerator = uuidGenerator
  }

  async run (params: CreateSubSubCategoryParams): Promise<SubSubCategory> {
    const foundSubSubCategory = await this._getSubSubCategory.run({ condition: 'name', conditionValue: params.subSubCategoryData.name, selections: { id: true } })
    if (foundSubSubCategory !== null) { throw new AlreadyExistsException() }

    const subSubCategory: SubSubCategory = { ...params.subSubCategoryData, id: this._uuidGenerator.generate() }
    await this._subSubCategoryRepository.createSubSubCategory(subSubCategory)
    return subSubCategory
  }
}
