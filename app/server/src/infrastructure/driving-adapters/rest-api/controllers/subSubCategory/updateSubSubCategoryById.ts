import { UpdateSubSubCategoryByIdUseCase } from '../../../../../application/usecases/subSubCategory/UpdateSubSubCategoryById'
import { MySQLSubSubCategoryRepository } from '../../../../implementations/MySQL/MySQLSubSubCategoryRepository'
import { UpdateSubSubCategoryByIdDto } from '../../dtos/subSubCategory/UpdateSubSubCategoryByIdDto'
import { NextFunction, Request, Response } from 'express'

export const updateSubSubCategoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updateSubSubCategoryByIdParams = UpdateSubSubCategoryByIdDto(req)
    const mySQLSubSubCategoryRepository = new MySQLSubSubCategoryRepository()
    const updateSubSubCategoryByIdUseCase = new UpdateSubSubCategoryByIdUseCase(mySQLSubSubCategoryRepository)
    const updatedSubSubCategory = await updateSubSubCategoryByIdUseCase.run(updateSubSubCategoryByIdParams)
    res.status(200).json(updatedSubSubCategory)
    return
  } catch (err) {
    return next(err)
  }
}
