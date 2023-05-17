import { S3Client } from '@aws-sdk/client-s3'
import { AWS_S3_BUCKET_REGION, AWS_S3_ACCESS_KEY_ID, AWS_S3_SECRET_ACCESS_KEY } from '../../../../domain/configs'

export class S3 {
  private static _INSTANCE: S3Client

  // Type StorageOptions viene de @google-cloud/storage
  static getInstance (): S3Client {
    if (this._INSTANCE === undefined) {
      this._INSTANCE = new S3Client({
        region: AWS_S3_BUCKET_REGION,
        credentials: {
          accessKeyId: AWS_S3_ACCESS_KEY_ID,
          secretAccessKey: AWS_S3_SECRET_ACCESS_KEY
        }
      })
    }

    return this._INSTANCE
  }
}
