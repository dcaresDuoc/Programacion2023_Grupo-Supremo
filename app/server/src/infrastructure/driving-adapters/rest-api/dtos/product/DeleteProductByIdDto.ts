// * EXCEPTIONS
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'

// * TYPES AND INTERFACES
import { Request } from 'express'

export const DeleteProductByIdDto = (req: Request): string => {
  return req.params.productId
}
