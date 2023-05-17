// * TYPES AND INTERFACES
import { DeleteFileByIdParams } from '../../../../../domain/utils/interfaces'
import { NextFunction, Request, Response } from 'express'

// * USE CASES
import { DeleteFileByIdUseCase } from '../../../../../application/usecases/file/DeleteFileById'

// * REPOSITORIES
import { GCPFileRepository } from '../../../../implementations/GCP/cloud-storage/GCPFileRepository'

// * DTO
import { DeleteFileByIdDto } from '../../dtos/file/DeleteFileByIdDto'

export const deleteFileById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const deleteFileByIdDto: DeleteFileByIdParams = DeleteFileByIdDto(req)
    const gcpFileRepository = new GCPFileRepository()
    const deleteFileByIdUseCase = new DeleteFileByIdUseCase(gcpFileRepository)
    await deleteFileByIdUseCase.run(deleteFileByIdDto)
    res.sendStatus(204)
    return
  } catch (err) {
    return next(err)
  }
}
