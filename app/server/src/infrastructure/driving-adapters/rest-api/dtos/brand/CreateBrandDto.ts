import { CreateBrandParams } from '../../../../../domain/utils/interfaces'
import { FieldsNotRequiredInBodyException } from './../../../../../domain/exceptions/FieldsNotRequiredException'
// * EXCEPTIONS
import { WrongTypeException } from '../../../../../domain/exceptions/WrongTypeException'
import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'

// * TYPES AND INTERFACES
import { Request } from 'express'

export const CreateBrandDto = (req: Request): CreateBrandParams => {
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

  const isValidJson = JSON.stringify(Object.keys(req.body)) === JSON.stringify(Object.keys({ name: '' }))
  if (!isValidJson) {
    throw new FieldsNotRequiredInBodyException()
  }

  const { name } = req.body

  if (name === undefined || name === null || name === '') {
    throw new MissingFieldInBodyException()
  }

  if (typeof name !== 'string') {
    throw new WrongTypeException()
  }

  return {
    brandData: req.body
  }
}
