import { GetBrand } from '../../../domain/services/brand/GetBrand'
import { BrandRepository } from '../../../domain/repositories/BrandRepository'
import { NotFoundException } from '../../../domain/exceptions/NotFoundException'
import { Category } from '../../../domain/entities/Category'

export class DeleteBrandByIdUseCase {
  private readonly _brandRepository: BrandRepository
  private readonly _getBrand: GetBrand

  constructor (brandRepository: BrandRepository) {
    this._brandRepository = brandRepository
    this._getBrand = new GetBrand(brandRepository)
  }

  async run (brandId: string): Promise<Category> {
    const foundBrand = await this._getBrand.run({ condition: 'id', conditionValue: brandId, selections: true })
    if (foundBrand === null) { throw new NotFoundException() }

    this._brandRepository.deleteBrandById(brandId)
    return foundBrand
  }
}
