import { CreateSubCategoryDto } from '../../dtos/subCategory/CreateSubCategoryDto'
import { CreateSubCategoryUseCase } from '../../../../../application/usecases/subCategory/CreateSubCategory'
import { MySQLSubCategoryRepository } from '../../../../implementations/MySQL/MySQLSubCategoryRepository'
import { NextFunction, Request, Response } from 'express'
import { UuidV4Generator } from '../../../../utils/UuidV4Generator'

export const createSubCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createCategoryParams = CreateSubCategoryDto(req)
    const mySQLSubCategoryRepository = new MySQLSubCategoryRepository()
    const uuidV4Generator = new UuidV4Generator()
    const createSubCategoryUseCase = new CreateSubCategoryUseCase(mySQLSubCategoryRepository, uuidV4Generator)
    const createdSubCategory = await createSubCategoryUseCase.run(createCategoryParams)
    res.status(201).json(createdSubCategory)
    return
  } catch (err) {
    return next(err)
  }
}
