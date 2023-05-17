// * EXCEPTIONS
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'

// * TYPES AND INTERFACES
import { Request } from 'express'

export const DeleteUserByIdDto = (req: Request): string => {
  if (req.params === undefined || req.params === null) {
    throw new MissingFieldInParamsException()
  }

  const { userId } = req.params

  if (userId === undefined || userId === null || userId === '') {
    throw new MissingFieldInParamsException()
  }

  return userId
}
