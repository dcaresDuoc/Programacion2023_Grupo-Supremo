// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'

// * USE CASES
import { DeleteBrandByIdUseCase } from '../../../../../application/usecases/brand/DeleteBrandById'

// * REPOSITORIES
import { MySQLBrandRepository } from '../../../../implementations/MySQL/MySQLBrandRepository'
import { DeleteBrandByIdDto } from '../../dtos/brand/DeleteBrandByIdDto'

export const deleteBrandById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const productId = DeleteBrandByIdDto(req)
    const mySQLBrandRepository = new MySQLBrandRepository()
    const deleteBrandByIdUseCase = new DeleteBrandByIdUseCase(mySQLBrandRepository)
    const deletedBrand = await deleteBrandByIdUseCase.run(productId)
    res.status(200).json(deletedBrand)
    return
  } catch (err) {
    return next(err)
  }
}
