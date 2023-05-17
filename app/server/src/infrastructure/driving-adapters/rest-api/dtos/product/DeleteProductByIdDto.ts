// * EXCEPTIONS
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'

// * TYPES AND INTERFACES
import { Request } from 'express'

export const DeleteProductByIdDto = (req: Request): string => {
  if (req.params === undefined || req.params === null) {
    throw new MissingFieldInParamsException()
  }

  const { productId } = req.params

  if (productId === undefined || productId === null || productId === '') {
    throw new MissingFieldInParamsException()
  }

  return productId
}
