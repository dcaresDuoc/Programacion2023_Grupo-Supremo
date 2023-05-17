import { Product } from '../entities/Product'

export const isProductOmitIdAverageRatingTotalReviews = (object: Object): object is Omit<Product, 'id' | 'averageRating' | 'totalReviews'> => {
  const requiredBodyFields = {
    name: '',
    description: '',
    price: 0,
    brandId: '',
    stock: 0,
    categoryId: '',
    subCategoryId: '',
    subSubCategoryId: ''
  }

  return JSON.stringify(Object.keys(object)) === JSON.stringify(Object.keys(requiredBodyFields))
}
