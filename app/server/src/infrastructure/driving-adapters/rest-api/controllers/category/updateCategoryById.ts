import { UpdateCategoryByIdUseCase } from '../../../../../application/usecases/category/UpdateCategoryById'
import { MySQLCategoryRepository } from '../../../../implementations/MySQL/MySQLCategoryRepository'
import { UpdateCategoryByIdDto } from '../../dtos/category/UpdateCategoryByIdDto'
import { NextFunction, Request, Response } from 'express'

export const updateCategoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updateCategoryByIdParams = UpdateCategoryByIdDto(req)
    const mySQLCategoryRepository = new MySQLCategoryRepository()
    const updateCategoryByIdUseCase = new UpdateCategoryByIdUseCase(mySQLCategoryRepository)
    const updatedCategory = await updateCategoryByIdUseCase.run(updateCategoryByIdParams)
    res.status(200).json(updatedCategory)
    return
  } catch (err) {
    return next(err)
  }
}
