import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'
import { FieldsNotRequiredInBodyException } from '../../../../../domain/exceptions/FieldsNotRequiredException'
import { isProductOmitIdAverageRatingTotalReviews } from '../../../../../domain/utils/isProductOmitIdAverageRatingTotalReviews'
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'
// * EXCEPTIONS
import { WrongTypeException } from '../../../../../domain/exceptions/WrongTypeException'

// * TYPES AND INTERFACES
import { Request } from 'express'
import { UpdateProductByIdParams } from '../../../../../domain/utils/interfaces'

// TODO: Faltaría validar la img
export const UpdateProductByIdDto = (req: Request): UpdateProductByIdParams => {
  if (req.body === undefined || req.body === null) {
    throw new MissingFieldInBodyException()
  }

  if (typeof req.body !== 'object') {
    throw new WrongTypeException()
  }

  try {
    Object.keys(req.body)
  } catch (err) {
    throw new WrongTypeException()
  }

  if (req.params === undefined || req.params === null) {
    throw new MissingFieldInParamsException()
  }

  const { productId } = req.params
  if (productId === undefined || productId === null || productId === '') {
    throw new MissingFieldInParamsException()
  }

  // Utilizo undefined así luego con el ?? puedo saber si el campo viene o no
  const undefinedProductData = { name: undefined, description: undefined, price: undefined, brandId: undefined, averageRating: undefined, totalReviews: undefined, stock: undefined, categoryId: undefined, subCategoryId: undefined, subSubCategoryId: undefined }

  if (!isProductOmitIdAverageRatingTotalReviews({ ...undefinedProductData, ...req.body })) {
    throw new FieldsNotRequiredInBodyException()
  }

  const { name, description, price, brandId, categoryId, subCategoryId, subSubCategoryId } = req.body

  if (name !== undefined && name !== null && name !== '') {
    if (typeof name !== 'string') {
      throw new WrongTypeException()
    }
  }

  if (description !== undefined && description !== null && description !== '') {
    if (typeof description !== 'string') {
      throw new WrongTypeException()
    }
  }

  if (price !== undefined && price !== null && price !== '') {
    if (typeof price !== 'number') {
      throw new WrongTypeException()
    }
  }

  if (brandId !== undefined && brandId !== null && brandId !== '') {
    if (typeof brandId !== 'string') {
      throw new WrongTypeException()
    }
  }

  if (categoryId !== undefined && categoryId !== null && categoryId !== '') {
    if (typeof categoryId !== 'string') {
      throw new WrongTypeException()
    }
  }

  if (subCategoryId !== undefined && subCategoryId !== null && subCategoryId !== '') {
    if (typeof subCategoryId !== 'string') {
      throw new WrongTypeException()
    }
  }

  if (subSubCategoryId !== undefined && subSubCategoryId !== null && subSubCategoryId !== '') {
    if (typeof subSubCategoryId !== 'string') {
      throw new WrongTypeException()
    }
  }

  return {
    productId,
    productData: req.body
  }
}
