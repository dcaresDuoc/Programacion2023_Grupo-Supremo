import { DeleteSubSubCategoryByIdUseCase } from '../../../../../application/usecases/subSubCategory/DeleteSubSubCategoryById'
import { MySQLSubSubCategoryRepository } from '../../../../implementations/MySQL/MySQLSubSubCategoryRepository'
import { NextFunction, Request, Response } from 'express'
import { DeleteSubSubCategoryByIdDto } from '../../dtos/subSubCategory/DeleteSubSubCategoryByIdDto'

export const deleteSubSubCategoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const subSubCategoryId = DeleteSubSubCategoryByIdDto(req)
    const mySQLSubSubCategoryRepository = new MySQLSubSubCategoryRepository()
    const deleteSubSubCategoryByIdUseCase = new DeleteSubSubCategoryByIdUseCase(mySQLSubSubCategoryRepository)
    const deletedSubSubCategory = await deleteSubSubCategoryByIdUseCase.run(subSubCategoryId)
    res.status(200).json(deletedSubSubCategory)
    return
  } catch (err) {
    return next(err)
  }
}
