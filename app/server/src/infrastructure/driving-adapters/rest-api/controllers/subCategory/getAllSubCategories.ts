import { GetAllSubCategoriesUseCase } from '../../../../../application/usecases/subCategory/GetAllSubCategories'
import { MySQLSubCategoryRepository } from '../../../../implementations/MySQL/MySQLSubCategoryRepository'
import { NextFunction, Request, Response } from 'express'

export const getAllSubCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const mySQLSubCategoryRepository = new MySQLSubCategoryRepository()
    const getAllSubCategoriesUseCase = new GetAllSubCategoriesUseCase(mySQLSubCategoryRepository)
    const subCategories = await getAllSubCategoriesUseCase.run()
    res.status(200).json(subCategories)
    return
  } catch (err) {
    return next(err)
  }
}
