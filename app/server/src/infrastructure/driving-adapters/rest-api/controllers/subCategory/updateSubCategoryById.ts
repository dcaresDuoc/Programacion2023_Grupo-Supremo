import { UpdateSubCategoryByIdDto } from '../../dtos/subCategory/UpdateSubCategoryByIdDto'
import { UpdateSubCategoryByIdUseCase } from '../../../../../application/usecases/subCategory/UpdateSubCategoryById'
import { MySQLSubCategoryRepository } from '../../../../implementations/MySQL/MySQLSubCategoryRepository'
import { NextFunction, Request, Response } from 'express'

export const updateSubCategoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updateSubCategoryByIdParams = UpdateSubCategoryByIdDto(req)
    const mySQLSubCategoryRepository = new MySQLSubCategoryRepository()
    const updateSubCategoryByIdUseCase = new UpdateSubCategoryByIdUseCase(mySQLSubCategoryRepository)
    const updatedSubCategory = await updateSubCategoryByIdUseCase.run(updateSubCategoryByIdParams)
    res.status(200).json(updatedSubCategory)
    return
  } catch (err) {
    return next(err)
  }
}
