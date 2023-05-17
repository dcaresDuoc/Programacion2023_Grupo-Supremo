import { CreateBrandParams } from '../../../../../domain/utils/interfaces'
import { CreateBrandDto } from '../../dtos/brand/CreateBrandDto'
// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'

// * USE CASES
import { CreateBrandUseCase } from '../../../../../application/usecases/brand/CreateBrand'

// * REPOSITORIES
import { MySQLBrandRepository } from '../../../../implementations/MySQL/MySQLBrandRepository'
import { UuidV4Generator } from '../../../../utils/UuidV4Generator'

export const createBrand = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createBrandParams: CreateBrandParams = CreateBrandDto(req)
    const mySQLBrandRepository = new MySQLBrandRepository()
    const uuidV4Generator = new UuidV4Generator()
    const createBrandUseCase = new CreateBrandUseCase(mySQLBrandRepository, uuidV4Generator)
    const createdBrand = await createBrandUseCase.run(createBrandParams)
    res.status(201).json(createdBrand)
    return
  } catch (err) {
    return next(err)
  }
}
