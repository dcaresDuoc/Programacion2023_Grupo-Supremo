// * EXCEPTIONS
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'

// * TYPES AND INTERFACES
import { Request } from 'express'

export const DeleteBrandByIdDto = (req: Request): string => {
  if (req.params === undefined || req.params === null) {
    throw new MissingFieldInParamsException()
  }

  const { brandId } = req.params

  if (brandId === undefined || brandId === null || brandId === '') {
    throw new MissingFieldInParamsException()
  }

  return brandId
}
