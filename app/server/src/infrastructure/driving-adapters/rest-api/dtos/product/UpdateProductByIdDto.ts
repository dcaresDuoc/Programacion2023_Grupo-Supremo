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

  return {
    productId: req.params.productId,
    productData: req.body
  }
}
