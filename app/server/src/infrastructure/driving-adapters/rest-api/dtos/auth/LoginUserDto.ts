// * EXCEPTIONS
import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'
import { WrongTypeException } from '../../../../../domain/exceptions/WrongTypeException'

// * TYPES AND INTERFACES
import { LoginUserParams } from '../../../../../domain/utils/interfaces'
import { Request } from 'express'
import { FieldsNotRequiredInBodyException } from '../../../../../domain/exceptions/FieldsNotRequiredException'

export const LoginUserDto = (req: Request): LoginUserParams => {
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

  const isValidJson = JSON.stringify(Object.keys(req.body)) === JSON.stringify(Object.keys({ email: '', password: '' }))
  if (!isValidJson) {
    throw new FieldsNotRequiredInBodyException()
  }

  const { email, password } = req.body

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
