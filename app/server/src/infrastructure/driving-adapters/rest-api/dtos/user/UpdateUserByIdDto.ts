import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'
import { isUserOmitId } from '../../../../../domain/utils/isUserOmitId'
import { FieldsNotRequiredInBodyException } from '../../../../../domain/exceptions/FieldsNotRequiredException'
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'
// * EXCEPTIONS
import { WrongTypeException } from '../../../../../domain/exceptions/WrongTypeException'

// * TYPES AND INTERFACES
import { Request } from 'express'
import { UpdateUserByIdParams } from '../../../../../domain/utils/interfaces'

export const UpdateUserByIdDto = (req: Request): UpdateUserByIdParams => {
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

  // * VALIDATION OF PARAMS
  const { userId } = req.params
  if (userId === undefined || userId === null || userId === '') {
    throw new MissingFieldInParamsException()
  }

  // * VALIDATION OF BODY
  const undefinedUserData = { name: undefined, email: undefined, password: undefined }
  if (!isUserOmitId({ ...undefinedUserData, ...req.body })) {
    throw new FieldsNotRequiredInBodyException()
  }

  const { name, email, password } = req.body

  if (name !== undefined && name !== null && name !== '') {
    if (typeof name !== 'string') {
      throw new WrongTypeException()
    }
  }

  if (email !== undefined && email !== null && email !== '') {
    if (typeof email !== 'string') {
      throw new WrongTypeException()
    }
  }

  if (password !== undefined && password !== null && password !== '') {
    if (typeof password !== 'string') {
      throw new WrongTypeException()
    }
  }

  return {
    userId: req.params.userId,
    userData: req.body
  }
}
