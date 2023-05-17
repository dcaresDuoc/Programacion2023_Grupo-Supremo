import { Brand } from '../../entities/Brand'
import { GetBrandParams, BrandSelections } from '../../utils/interfaces'
import { BrandRepository } from '../../repositories/BrandRepository'
export class GetBrand {
  private readonly _brandRespository: BrandRepository

  constructor (brandRepository: BrandRepository) {
    this._brandRespository = brandRepository
  }

  async run (getBrandParams: GetBrandParams): Promise<Brand | null> {
    /* const brandSelections: BrandSelections = { id: getBrandParams.selections.id ?? false, name: getBrandParams.selections.name ?? false } */

    const brandSelections: BrandSelections = {}

    if (typeof getBrandParams.selections === 'boolean') {
      brandSelections.id = true
      brandSelections.name = true
    } else {
      if (getBrandParams.selections.id !== undefined) {
        brandSelections.id = getBrandParams.selections.id
      }

      if (getBrandParams.selections.name !== undefined) {
        brandSelections.name = getBrandParams.selections.name
      }
    }

    const foundBrand = await this._brandRespository.getBrand(getBrandParams.condition, getBrandParams.conditionValue, brandSelections)
    return foundBrand as Brand
  }
}
