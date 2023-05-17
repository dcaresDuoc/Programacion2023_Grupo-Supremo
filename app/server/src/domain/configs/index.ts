// import 'dotenv/config'
import * as dotenv from 'dotenv'
dotenv.config({
  // path: `.env.${process.env.ENV_MODE}`
  path: '.env.development'
})

if (process.env.REST_API === undefined ||
    process.env.JWT_SECRET === undefined ||
    process.env.DATABASE_URL === undefined ||
    process.env.GCP_CLOUD_STORAGE_BUCKET_NAME === undefined ||
    process.env.AWS_S3_BUCKET_REGION === undefined ||
    process.env.AWS_S3_BUCKET_NAME === undefined ||
    process.env.AWS_S3_ACCESS_KEY_ID === undefined ||
    process.env.AWS_S3_SECRET_ACCESS_KEY === undefined
) {
  throw new Error('Missing environment variables')
}

export const REST_API = process.env.REST_API
export const JWT_SECRET = process.env.JWT_SECRET
// por alguna razon no le pone el nombre a la cookie si uso el nombre de la variable de entorno
export const SESSION_COOKIE_NAME = 'DEVELOPMENT_ECO_SESSION_COOKIE_NAME'
export const DATABASE_URL = process.env.DATABASE_URL
// GCP Cloud Storage
export const GCP_CLOUD_STORAGE_BUCKET_NAME = process.env.GCP_CLOUD_STORAGE_BUCKET_NAME
// AWS S3
export const AWS_S3_BUCKET_REGION = process.env.AWS_S3_BUCKET_REGION
export const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME
export const AWS_S3_ACCESS_KEY_ID = process.env.AWS_S3_ACCESS_KEY_ID
export const AWS_S3_SECRET_ACCESS_KEY = process.env.AWS_S3_SECRET_ACCESS_KEY
