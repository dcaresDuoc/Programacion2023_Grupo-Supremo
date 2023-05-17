// * EXCEPTIONS
import { MissingFieldInParamsException } from '../../../../../domain/exceptions/MissingFieldInParamsException'

// * TYPES AND INTERFACES
import { Request, Response } from 'express'
import { StreamFileByIdParams } from '../../../../../domain/utils/interfaces'

export const StreamFileByIdDto = (req: Request, res: Response): StreamFileByIdParams => {
  if (req.params === undefined || req.params === null) {
    throw new MissingFieldInParamsException()
  }

  const { fileId } = req.params

  if (fileId === undefined || fileId === null || fileId === '') {
    throw new MissingFieldInParamsException()
  }

  return {
    id: fileId,
    res
  }
}
