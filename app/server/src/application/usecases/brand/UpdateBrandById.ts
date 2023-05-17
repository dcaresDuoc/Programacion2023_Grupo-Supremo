import { UpdateBrandByIdParams } from '../../../domain/utils/interfaces'
import { Brand } from '../../../domain/entities/Brand'
import { GetBrand } from '../../../domain/services/brand/GetBrand'
import { BrandRepository } from '../../../domain/repositories/BrandRepository'
import { NotFoundException } from '../../../domain/exceptions/NotFoundException'

export class UpdateBrandByIdUseCase {
  private readonly _brandRepository: BrandRepository
  private readonly _getBrand: GetBrand

  constructor (brandRepository: BrandRepository) {
    this._brandRepository = brandRepository
    this._getBrand = new GetBrand(brandRepository)
  }

  async run (params: UpdateBrandByIdParams): Promise<Brand> {
    const foundBrand = await this._getBrand.run({ condition: 'id', conditionValue: params.brandId, selections: true })
    if (foundBrand === null) { throw new NotFoundException() }

    const brand: Brand = {
      id: params.brandId,
      name: params.brandData.name ?? foundBrand.name
    }

    await this._brandRepository.updateBrandById(params.brandId, brand)
    return brand
  }
}
