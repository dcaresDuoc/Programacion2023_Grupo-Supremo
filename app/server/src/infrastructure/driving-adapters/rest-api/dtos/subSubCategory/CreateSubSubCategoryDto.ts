import { validateReqBodyCreateSubSubCategory } from '../../../../utils/validator'
import { CreateSubSubCategoryParams } from '../../../../../domain/utils/interfaces'
import { WrongTypeException } from '../../../../../domain/exceptions/WrongTypeException'
import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'

// * TYPES AND INTERFACES
import { Request } from 'express'

export const CreateSubSubCategoryDto = (req: Request): CreateSubSubCategoryParams => {
  if (req.body === undefined || req.body === null) {
    throw new MissingFieldInBodyException()
  }

  if (typeof req.body !== 'object') {
    throw new WrongTypeException()
  }

  const validateReqBody = validateReqBodyCreateSubSubCategory(req.body)
  if (validateReqBody.error !== undefined && validateReqBody.error !== null) {
    throw {
      joiValidation: true,
      message: validateReqBody.error.details
    }
  }

  return {
    subSubCategoryData: req.body
  }
}
