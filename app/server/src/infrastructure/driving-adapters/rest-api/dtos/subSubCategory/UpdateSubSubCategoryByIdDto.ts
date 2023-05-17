import { validateReqBodyUpdateSubSubCategoryById, validateReqParamsUpdateSubSubCategoryById } from '../../../../utils/validator'
import { UpdateSubSubCategoryByIdParams } from '../../../../../domain/utils/interfaces'
import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'
import { Request } from 'express'

export const UpdateSubSubCategoryByIdDto = (req: Request): UpdateSubSubCategoryByIdParams => {
  if (req.body === undefined || req.body === null || req.body === '') {
    throw new MissingFieldInBodyException()
  }

  if (req.params === undefined || req.params === null) {
    throw new MissingFieldInParamsException()
  }

  const validateReqParams = validateReqParamsUpdateSubSubCategoryById(req.params as any)
  if (validateReqParams.error !== undefined && validateReqParams.error !== null) {
    throw {
      joiValidation: true,
      message: validateReqParams.error.details
    }
  }

  const validateReqBody = validateReqBodyUpdateSubSubCategoryById(req.body)
  if (validateReqBody.error !== undefined && validateReqBody.error !== null) {
    throw {
      joiValidation: true,
      message: validateReqBody.error.details
    }
  }

  return {
    subSubCategoryData: req.body,
    subSubCategoryId: req.params.subCategoryId
  }
}
