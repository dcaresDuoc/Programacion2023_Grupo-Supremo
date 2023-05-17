import { FileRepository } from '../../../../domain/repositories/FileRepository'
import { CloudStorage } from '../../../driven-adapters/GCP/cloud-storage'
import { GCP_CLOUD_STORAGE_BUCKET_NAME } from '../../../../domain/configs'
import { Response } from 'express'
import { FileNotFoundException } from '../../../../domain/exceptions/FileNotFoundException'
import { Readable } from 'stream'

export class GCPFileRepository implements FileRepository {
  private readonly _storage = CloudStorage.getInstance()

  async streamingFile (fileName: string, res: Response): Promise<void> {
    const cloudFile = this._storage.bucket(GCP_CLOUD_STORAGE_BUCKET_NAME).file(fileName)
    const readableFile = cloudFile.createReadStream()

    return new Promise((resolve, reject) => {
      readableFile.on('error', (error: any) => {
        console.log(error)
        if (error.code === 404) {
          return reject(new FileNotFoundException())
        }
        return reject(new Error('Error streaming file on cloud storage'))
      })
      readableFile.pipe(res)

      readableFile.on('end', () => {
        resolve()
      })
    })
  }

  async removeFile (fileId: string): Promise<void> {
    // reference to the file on the cloud storage
    const cloudFile = this._storage.bucket(GCP_CLOUD_STORAGE_BUCKET_NAME).file(fileId)
    try {
      // Http response
      await cloudFile.delete()
    } catch (err: any) {
      console.log(err)
      if (err.code === 404) {
        throw new FileNotFoundException()
      }
      throw new Error('Error deleting file on cloud storage')
    }
  }

  // Si guardas un archivo con el mismo nombre, GCP lo sobreescribe
  async uploadFile (fileBuffer: Buffer, fileId: string): Promise<void> {
    // reference to the file on the cloud storage
    const cloudFile = this._storage.bucket(GCP_CLOUD_STORAGE_BUCKET_NAME).file(fileId)
    const fileStream = Readable.from(fileBuffer)
    return new Promise((resolve, reject) => {
      fileStream
        .pipe(cloudFile.createWriteStream())
        .on('finish', () => {
          resolve()
        })
        // TODO: No hemos probado este caso de error
        .on('error', (err) => {
          console.log(err)
          reject(new Error('Error uploading file to cloud storage'))
        })
    })
  }
}
