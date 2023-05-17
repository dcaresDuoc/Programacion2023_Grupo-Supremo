import { PrismaClient } from '@prisma/client'

import * as dotenv from 'dotenv'
dotenv.config({
  path: '.env.development'
})

const prismaClient = new PrismaClient()

export default prismaClient
