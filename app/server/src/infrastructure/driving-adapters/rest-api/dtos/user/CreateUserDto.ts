import { isUserOmitId } from '../../../../../domain/utils/isUserOmitId'
import { FieldsNotRequiredInBodyException } from './../../../../../domain/exceptions/FieldsNotRequiredException'
// * EXCEPTIONS
import { WrongTypeException } from '../../../../../domain/exceptions/WrongTypeException'
import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'

// * TYPES AND INTERFACES
import { Request } from 'express'
import { CreateUserParams } from '../../../../../domain/utils/interfaces'

export const CreateUserDto = (req: Request): CreateUserParams => {
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

  if (!isUserOmitId(req.body)) {
    throw new FieldsNotRequiredInBodyException()
  }

  const { name, email, password } = req.body

  if (name === undefined || name === null || name === '') {
    throw new MissingFieldInBodyException()
  }

  if (typeof name !== 'string') {
    throw new WrongTypeException()
  }

  if (email === undefined || email === null || email === '') {
    throw new MissingFieldInBodyException()
  }

  if (typeof email !== 'string') {
    throw new WrongTypeException()
  }

  if (password === undefined || password === null || password === '') {
    throw new MissingFieldInBodyException()
  }

  if (typeof password !== 'string') {
    throw new WrongTypeException()
  }

  return {
    userData: req.body
  }
}
