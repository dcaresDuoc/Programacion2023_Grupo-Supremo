// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'

// * USE CASES
import { GetAllBrandsUseCase } from '../../../../../application/usecases/brand/GetAllBrands'

// * REPOSITORIES
import { MySQLBrandRepository } from '../../../../implementations/MySQL/MySQLBrandRepository'

export const getAllBrands = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const mySQLBrandRepository = new MySQLBrandRepository()
    const getAllBrandsUseCase = new GetAllBrandsUseCase(mySQLBrandRepository)
    const brands = await getAllBrandsUseCase.run()
    res.status(200).json(brands)
    return
  } catch (err) {
    return next(err)
  }
}
