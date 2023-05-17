import { FileRepository } from '../../../domain/repositories/FileRepository'
import { StreamFileByIdParams } from '../../../domain/utils/interfaces'

export class StreamFileByIdUseCase {
  private readonly _fileRespository: FileRepository

  constructor (fileRepository: FileRepository) {
    this._fileRespository = fileRepository
  }

  async run (params: StreamFileByIdParams): Promise<void> {
    await this._fileRespository.streamingFile(params.id, params.res)
    params.res.status(200).end()
  }
}
