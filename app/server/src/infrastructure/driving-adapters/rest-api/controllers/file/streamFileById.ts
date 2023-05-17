// * TYPES AND INTERFACES
import { StreamFileByIdParams } from '../../../../../domain/utils/interfaces'
import { NextFunction, Request, Response } from 'express'

// * USE CASES
import { StreamFileByIdUseCase } from '../../../../../application/usecases/file/StreamFileById'

// * REPOSITORIES
import { GCPFileRepository } from '../../../../implementations/GCP/cloud-storage/GCPFileRepository'

// * DTO
import { StreamFileByIdDto } from '../../dtos/file/StreamFileByIdDto'

export const streamFileById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const streamFileByIdDto: StreamFileByIdParams = StreamFileByIdDto(req, res)
    const gcpFileRepository = new GCPFileRepository()
    const streamFileByIdUseCase = new StreamFileByIdUseCase(gcpFileRepository)
    await streamFileByIdUseCase.run(streamFileByIdDto)
    return
  } catch (err) {
    return next(err)
  }
}
