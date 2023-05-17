import { validateReqBodyCreateSubCategory } from '../../../../utils/validator'
import { CreateSubCategoryParams } from '../../../../../domain/utils/interfaces'
import { WrongTypeException } from '../../../../../domain/exceptions/WrongTypeException'
import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'

// * TYPES AND INTERFACES
import { Request } from 'express'

export const CreateSubCategoryDto = (req: Request): CreateSubCategoryParams => {
  if (req.body === undefined || req.body === null) {
    throw new MissingFieldInBodyException()
  }

  if (typeof req.body !== 'object') {
    throw new WrongTypeException()
  }

  const validateReqBody = validateReqBodyCreateSubCategory(req.body)
  if (validateReqBody.error !== undefined && validateReqBody.error !== null) {
    throw {
      joiValidation: true,
      message: validateReqBody.error.details
    }
  }

  return {
    subCategoryData: req.body
  }
}
