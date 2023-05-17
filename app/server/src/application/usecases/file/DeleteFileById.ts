import { FileRepository } from '../../../domain/repositories/FileRepository'
import { DeleteFileByIdParams } from '../../../domain/utils/interfaces'

export class DeleteFileByIdUseCase {
  private readonly _fileRespository: FileRepository

  constructor (fileRepository: FileRepository) {
    this._fileRespository = fileRepository
  }

  async run (params: DeleteFileByIdParams): Promise<void> {
    await this._fileRespository.removeFile(params.id)
  }
}
