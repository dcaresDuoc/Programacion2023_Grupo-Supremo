// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'

// * USE CASES
import { GetAllProductUseCase } from '../../../../../application/usecases/product/GetAllProduct'

// * REPOSITORIES
import { MySQLProductRepository } from '../../../../implementations/MySQL/MySQLProductRepository'

export const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const mySQLProductRepository = new MySQLProductRepository()
    const getAllProductUseCase = new GetAllProductUseCase(mySQLProductRepository)
    const users = await getAllProductUseCase.run()
    res.status(200).json(users)
    return
  } catch (err) {
    return next(err)
  }
}
