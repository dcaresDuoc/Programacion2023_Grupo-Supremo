import { File } from "../entities/file"
import { CreateFileDBInput, UpdateFileDBInput } from "../utils/interfaces"

export interface ExistFileById_FileDBRepository {
  fileId: string
}

export interface ExistFileByFileName_FileDBRepository {
  fileName: string
}

export interface GetFileById_FileDBRepository {
  fileId: string
}

export interface UpdateFileById_FileDBRepository {
  fileId: string
  data: UpdateFileDBInput
}

// Los objetos no se pueden actualizar simplemente se borran y se crean nuevos, por eso no hay update
export interface ProductImageDBRepository {
  existProductImageById: (
    params: ExistFileById_FileDBRepository
  ) => Promise<boolean>
  existProductImageByFileName: (
    params: ExistFileByFileName_FileDBRepository
  ) => Promise<boolean>
  createProductImage: (file: CreateFileDBInput) => Promise<File>
  deleteProductImageById: (fileId: string) => Promise<File>

  updateProductImageById: (
    params: UpdateFileById_FileDBRepository
  ) => Promise<File>
  getProductImageById: (
    params: GetFileById_FileDBRepository
  ) => Promise<File | null>
}
