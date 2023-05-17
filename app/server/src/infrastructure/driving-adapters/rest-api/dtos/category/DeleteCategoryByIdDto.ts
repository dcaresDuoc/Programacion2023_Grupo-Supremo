// * EXCEPTIONS
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'

// * TYPES AND INTERFACES
import { Request } from 'express'

export const DeleteCategoryByIdDto = (req: Request): string => {
  if (req.params === undefined || req.params === null) {
    throw new MissingFieldInParamsException()
  }

  const { categoryId } = req.params

  if (categoryId === undefined || categoryId === null || categoryId === '') {
    throw new MissingFieldInParamsException()
  }

  return categoryId
}
