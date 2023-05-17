import { DeleteCategoryByIdUseCase } from '../../../../../application/usecases/category/DeleteCategoryById'
import { MySQLCategoryRepository } from '../../../../implementations/MySQL/MySQLCategoryRepository'
import { NextFunction, Request, Response } from 'express'
import { DeleteCategoryByIdDto } from '../../dtos/category/DeleteCategoryByIdDto'

export const deleteCategoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const categoryId = DeleteCategoryByIdDto(req)
    const mySQLCategoryRepository = new MySQLCategoryRepository()
    const deleteCategoryByIdUseCase = new DeleteCategoryByIdUseCase(mySQLCategoryRepository)
    const deletedCategory = await deleteCategoryByIdUseCase.run(categoryId)
    res.status(200).json(deletedCategory)
    return
  } catch (err) {
    return next(err)
  }
}
