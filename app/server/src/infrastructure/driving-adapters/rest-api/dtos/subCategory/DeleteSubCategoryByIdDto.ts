// * EXCEPTIONS
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'

// * TYPES AND INTERFACES
import { Request } from 'express'
import { validateReqParamsDeleteSubCategoryById } from '../../../../utils/validator'

export const DeleteSubCategoryByIdDto = (req: Request): string => {
  if (req.params === undefined || req.params === null) {
    throw new MissingFieldInParamsException()
  }

  const validateReqParams = validateReqParamsDeleteSubCategoryById(req.params as any)
  if (validateReqParams.error !== undefined && validateReqParams.error !== null) {
    throw {
      joiValidation: true,
      message: validateReqParams.error.details
    }
  }

  return req.params.subCategoryId
}
