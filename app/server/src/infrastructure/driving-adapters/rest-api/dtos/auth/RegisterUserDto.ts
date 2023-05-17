import { FieldsNotRequiredInBodyException } from './../../../../../domain/exceptions/FieldsNotRequiredException'
// * EXCEPTIONS
import { WrongTypeException } from '../../../../../domain/exceptions/WrongTypeException'
import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'

// * TYPES AND INTERFACES
import { Request } from 'express'
import { RegisterUserParams } from '../../../../../domain/utils/interfaces'

export const RegisterUserDto = (req: Request): RegisterUserParams => {
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

  const isValidJson = JSON.stringify(Object.keys(req.body)) === JSON.stringify(Object.keys({ name: '', email: '', password: '' }))
  if (!isValidJson) {
    throw new FieldsNotRequiredInBodyException()
  }

  const { name, email, password } = req.body

  if (name === undefined || name === null) {
    throw new MissingFieldInBodyException()
  }

  if (typeof name !== 'string') {
    throw new WrongTypeException()
  }

  if (email === undefined || email === null) {
    throw new MissingFieldInBodyException()
  }

  if (typeof email !== 'string') {
    throw new WrongTypeException()
  }

  if (password === undefined || password === null) {
    throw new MissingFieldInBodyException()
  }

  if (typeof password !== 'string') {
    throw new WrongTypeException()
  }

  return {
    userData: req.body
  }
}
