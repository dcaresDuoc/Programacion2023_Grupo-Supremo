import { GetAllSubSubCategoriesUseCase } from '../../../../../application/usecases/subSubCategory/GetAllSubSubCategories'
import { MySQLSubSubCategoryRepository } from '../../../../implementations/MySQL/MySQLSubSubCategoryRepository'
import { NextFunction, Request, Response } from 'express'

export const getAllSubSubCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const mySQLSubSubCategoryRepository = new MySQLSubSubCategoryRepository()
    const getAllSubSubCategoriesUseCase = new GetAllSubSubCategoriesUseCase(mySQLSubSubCategoryRepository)
    const subSubCategories = await getAllSubSubCategoriesUseCase.run()
    res.status(200).json(subSubCategories)
    return
  } catch (err) {
    return next(err)
  }
}
