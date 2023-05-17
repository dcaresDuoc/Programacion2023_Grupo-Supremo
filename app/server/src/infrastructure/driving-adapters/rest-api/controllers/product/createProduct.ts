// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'

// * USE CASES
import { CreateProductUseCase } from '../../../../../application/usecases/product/CreateProduct'

// * REPOSITORIES
import { MySQLProductRepository } from '../../../../../infrastructure/implementations/MySQL/MySQLProductRepository'
import { CreateProductDto } from '../../dtos/product/CreateProductDto'
import { CreateProductParams } from '../../../../../domain/utils/interfaces'
import { GCPFileRepository } from '../../../../../infrastructure/implementations/GCP/cloud-storage/GCPFileRepository'
import { MySQLProductImageRepository } from '../../../../../infrastructure/implementations/MySQL/MySQLProductImageRepository'
import { UuidV4Generator } from '../../../../utils/UuidV4Generator'

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createProductParams: CreateProductParams = CreateProductDto(req)

    const mySQLProductRepo = new MySQLProductRepository()
    const gcpFileRepository = new GCPFileRepository()
    const mySQLProductImageRepository = new MySQLProductImageRepository()
    const uuidV4Generator = new UuidV4Generator()
    const createProductUseCase = new CreateProductUseCase(mySQLProductRepo, gcpFileRepository, mySQLProductImageRepository, uuidV4Generator)

    const createdProduct = await createProductUseCase.run(createProductParams)
    res.status(201).json(createdProduct)
    return
  } catch (err) {
    return next(err)
  }
}
