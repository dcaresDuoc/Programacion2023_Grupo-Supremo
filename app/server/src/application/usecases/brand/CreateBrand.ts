import { CreateBrandParams } from '../../../domain/utils/interfaces'
import { Brand } from '../../../domain/entities/Brand'
import { GetBrand } from '../../../domain/services/brand/GetBrand'
import { BrandRepository } from '../../../domain/repositories/BrandRepository'
import { AlreadyExistsException } from '../../../domain/exceptions/AlreadyExistsException'
import { UuidGenerator } from '../../../domain/utils/UuidGenerator'

export class CreateBrandUseCase {
  private readonly _brandRespository: BrandRepository
  private readonly _getBrand: GetBrand
  private readonly _uuidGenerator: UuidGenerator

  constructor (brandRepository: BrandRepository, uuidGenerator: UuidGenerator) {
    this._brandRespository = brandRepository
    this._getBrand = new GetBrand(brandRepository)
    this._uuidGenerator = uuidGenerator
  }

  async run (params: CreateBrandParams): Promise<Brand> {
    const foundBrand = await this._getBrand.run({ condition: 'name', conditionValue: params.brandData.name, selections: { id: true } })
    if (foundBrand !== null) { throw new AlreadyExistsException() }

    const brand: Brand = { ...params.brandData, id: this._uuidGenerator.generate() }
    await this._brandRespository.createBrand(brand)
    return brand
  }
}
