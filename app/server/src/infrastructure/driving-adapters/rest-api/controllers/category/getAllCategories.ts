import { GetAllCategoriesUseCase } from '../../../../../application/usecases/category/GetAllCategories'
import { MySQLCategoryRepository } from '../../../../implementations/MySQL/MySQLCategoryRepository'
import { NextFunction, Request, Response } from 'express'

export const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const mySQLCategoryRepository = new MySQLCategoryRepository()
    const getAllCategoriesUseCase = new GetAllCategoriesUseCase(mySQLCategoryRepository)
    const categories = await getAllCategoriesUseCase.run()
    res.status(200).json(categories)
    return
  } catch (err) {
    return next(err)
  }
}
