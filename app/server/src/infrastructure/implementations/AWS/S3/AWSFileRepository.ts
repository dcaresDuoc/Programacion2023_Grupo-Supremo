import { FileRepository } from '../../../../domain/repositories/FileRepository'
import { S3 } from '../../../driven-adapters/AWS/S3'
import { AWS_S3_BUCKET_NAME } from '../../../../domain/configs'
import { Response } from 'express'
import { FileNotFoundException } from '../../../../domain/exceptions/FileNotFoundException'
import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'

export class AWSFileRepository implements FileRepository {
  private readonly _s3Client = S3.getInstance()

  async downloadFile (fileName: string, res: Response): Promise<boolean> {
    const params = {
      Bucket: AWS_S3_BUCKET_NAME,
      Key: fileName
    }
    const command = new GetObjectCommand(params)
    const result: any = await this._s3Client.send(command)
    // This is for save in local pc
    // (result.Body as any).pipe(fs.createWriteStream('./images/image.png'))
    return new Promise((resolve, reject) => {
      if (result.Body === undefined) {
        return reject(new Error('Error downloading file on S3'))
      }

      result.Body.on('error', (err: any) => {
        if (err.code === 404) {
          return reject(new FileNotFoundException())
        }
        return reject(new Error('Error downloading file on cloud storage'))
      })
      result.Body.pipe(res)

      result.Body.on('end', () => {
        resolve(true)
      })
    })
  }

  async removeFile (fileName: string): Promise<null> {
    const params = {
      Bucket: AWS_S3_BUCKET_NAME,
      Key: fileName
    }

    try {
      const command = new DeleteObjectCommand(params)
      await this._s3Client.send(command)
      return null
    } catch (err: any) {
      console.log(err)
      if (err.code === 404) {
        throw new FileNotFoundException()
      }
      throw new Error('Error deleting file on S3')
    }
  }

  async uploadFile (fileBuffer: Buffer, fileName: string): Promise<null> {
    const params = {
      Bucket: AWS_S3_BUCKET_NAME,
      Key: fileName,
      Body: fileBuffer
      // para que es esto
      // ACL: 'public-read'
    }
    const command = new PutObjectCommand(params)
    try {
      await this._s3Client.send(command)
    } catch (err: any) {
      throw new Error('Error uploading file on S3')
    }
    return null
  }
}
