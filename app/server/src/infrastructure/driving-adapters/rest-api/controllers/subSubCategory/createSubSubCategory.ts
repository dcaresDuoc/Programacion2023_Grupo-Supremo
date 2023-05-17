import { CreateSubSubCategoryUseCase } from '../../../../../application/usecases/subSubCategory/CreateSubSubCategory'
import { MySQLSubSubCategoryRepository } from '../../../../implementations/MySQL/MySQLSubSubCategoryRepository'
import { CreateSubSubCategoryDto } from '../../dtos/subSubCategory/CreateSubSubCategoryDto'
import { NextFunction, Request, Response } from 'express'
import { UuidV4Generator } from '../../../../utils/UuidV4Generator'

export const createSubSubCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createSubSubCategoryParams = CreateSubSubCategoryDto(req)
    const mySQLSubSubCategoryRepository = new MySQLSubSubCategoryRepository()
    const uuidV4Generator = new UuidV4Generator()
    const createSubSubCategoryUseCase = new CreateSubSubCategoryUseCase(mySQLSubSubCategoryRepository, uuidV4Generator)
    const createdSubSubCategory = await createSubSubCategoryUseCase.run(createSubSubCategoryParams)
    res.status(201).json(createdSubSubCategory)
    return
  } catch (err) {
    return next(err)
  }
}
