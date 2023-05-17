import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'
import { FieldsNotRequiredInBodyException } from '../../../../../domain/exceptions/FieldsNotRequiredException'
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'
import { UpdateBrandByIdParams } from '../../../../../domain/utils/interfaces'
// * EXCEPTIONS
import { WrongTypeException } from '../../../../../domain/exceptions/WrongTypeException'

// * TYPES AND INTERFACES
import { Request } from 'express'

export const UpdateBrandByIdDto = (req: Request): UpdateBrandByIdParams => {
  if (req.body === undefined || req.body === null || req.body === '') {
    throw new MissingFieldInBodyException()
  }

  if (req.params === undefined || req.params === null) {
    throw new MissingFieldInParamsException()
  }

  const undefinedBrandData = { name: undefined }
  const isValidJson = JSON.stringify(Object.keys({ ...undefinedBrandData, ...req.body })) === JSON.stringify(Object.keys({ name: '' }))
  if (!isValidJson) {
    throw new FieldsNotRequiredInBodyException()
  }

  const { brandId } = req.params
  const { name } = req.body

  if (brandId === undefined || brandId === null || brandId === '') {
    throw new MissingFieldInParamsException()
  }

  if (name !== undefined && name !== null && name !== '') {
    if (typeof name !== 'string') {
      throw new WrongTypeException()
    }
  }

  return {
    brandId,
    brandData: req.body
  }
}
