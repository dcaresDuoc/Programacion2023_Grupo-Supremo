import { UpdateSubCategoryByIdParams } from '../../../../../domain/utils/interfaces'
import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'
import { Request } from 'express'
import { validateReqBodyUpdateSubCategoryById, validateReqParamsUpdateSubCategoryById } from '../../../../utils/validator'

export const UpdateSubCategoryByIdDto = (req: Request): UpdateSubCategoryByIdParams => {
  if (req.body === undefined || req.body === null || req.body === '') {
    throw new MissingFieldInBodyException()
  }

  if (req.params === undefined || req.params === null) {
    throw new MissingFieldInParamsException()
  }

  const validateReqParams = validateReqParamsUpdateSubCategoryById(req.params as any)
  if (validateReqParams.error !== undefined && validateReqParams.error !== null) {
    throw {
      joiValidation: true,
      message: validateReqParams.error.details
    }
  }

  const validateReqBody = validateReqBodyUpdateSubCategoryById(req.body)
  if (validateReqBody.error !== undefined && validateReqBody.error !== null) {
    throw {
      joiValidation: true,
      message: validateReqBody.error.details
    }
  }

  return {
    subCategoryData: req.body,
    subCategoryId: req.params.subCategoryId
  }
}
