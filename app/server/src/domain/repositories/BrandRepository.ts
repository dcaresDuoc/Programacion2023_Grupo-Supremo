import { FindBrandConditions, FindBrandValues, BrandSelections } from '../utils/interfaces'
import { Brand } from '../entities/Brand'

export interface BrandRepository {
  getAllBrands: () => Promise<Brand[]>
  createBrand: (brand: Brand) => Promise<void>
  updateBrandById: (brandId: string, brand: Brand) => Promise<void>
  deleteBrandById: (brandId: string) => Promise<void>
  getBrand: (condition: FindBrandConditions, conditionValue: FindBrandValues, selections: BrandSelections) => Promise<Partial<Brand> | null>
}
