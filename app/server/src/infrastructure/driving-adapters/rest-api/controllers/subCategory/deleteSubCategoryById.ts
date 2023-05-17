import { DeleteSubCategoryByIdUseCase } from '../../../../../application/usecases/subCategory/DeleteSubCategoryById'
import { MySQLSubCategoryRepository } from '../../../../implementations/MySQL/MySQLSubCategoryRepository'
import { NextFunction, Request, Response } from 'express'
import { DeleteSubCategoryByIdDto } from '../../dtos/subCategory/DeleteSubCategoryByIdDto'

export const deleteSubCategoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const subCategoryId = DeleteSubCategoryByIdDto(req)
    const mySQLSubCategoryRepository = new MySQLSubCategoryRepository()
    const deleteSubCategoryByIdUseCase = new DeleteSubCategoryByIdUseCase(mySQLSubCategoryRepository)
    const deletedSubCategory = await deleteSubCategoryByIdUseCase.run(subCategoryId)
    res.status(200).json(deletedSubCategory)
    return
  } catch (err) {
    return next(err)
  }
}
