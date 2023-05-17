import { UpdateCategoryByIdParams } from '../../../../../domain/utils/interfaces'
import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'
import { FieldsNotRequiredInBodyException } from '../../../../../domain/exceptions/FieldsNotRequiredException'
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'
// * EXCEPTIONS
import { WrongTypeException } from '../../../../../domain/exceptions/WrongTypeException'

// * TYPES AND INTERFACES
import { Request } from 'express'

export const UpdateCategoryByIdDto = (req: Request): UpdateCategoryByIdParams => {
  if (req.body === undefined || req.body === null || req.body === '') {
    throw new MissingFieldInBodyException()
  }

  if (req.params === undefined || req.params === null) {
    throw new MissingFieldInParamsException()
  }

  const undefinedCategoryData = { name: undefined }
  const isValidJson = JSON.stringify(Object.keys({ ...undefinedCategoryData, ...req.body })) === JSON.stringify(Object.keys({ name: '' }))
  if (!isValidJson) {
    throw new FieldsNotRequiredInBodyException()
  }

  const { categoryId } = req.params
  const { name } = req.body

  if (categoryId === undefined || categoryId === null || categoryId === '') {
    throw new MissingFieldInParamsException()
  }

  if (name !== undefined && name !== null && name !== '') {
    if (typeof name !== 'string') {
      throw new WrongTypeException()
    }
  }

  return {
    categoryId,
    categoryData: req.body
  }
}
