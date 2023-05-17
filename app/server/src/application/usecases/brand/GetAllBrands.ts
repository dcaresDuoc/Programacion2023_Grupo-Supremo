import { Brand } from '../../../domain/entities/Brand'
import { BrandRepository } from '../../../domain/repositories/BrandRepository'

export class GetAllBrandsUseCase {
  private readonly _brandRepository: BrandRepository

  constructor (brandRepository: BrandRepository) {
    this._brandRepository = brandRepository
  }

  async run (): Promise<Brand[]> {
    const brands = await this._brandRepository.getAllBrands()
    return brands
  }
}
