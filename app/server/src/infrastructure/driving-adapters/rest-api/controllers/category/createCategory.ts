import { CreateCategoryDto } from '../../dtos/category/CreateCategoryDto'
import { CreateCategoryUseCase } from '../../../../../application/usecases/category/CreateCategory'
import { MySQLCategoryRepository } from '../../../../implementations/MySQL/MySQLCategoryRepository'
import { NextFunction, Request, Response } from 'express'
import { UuidV4Generator } from '../../../../utils/UuidV4Generator'

export const createCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createCategoryParams = CreateCategoryDto(req)
    const mySQLCategoryRepository = new MySQLCategoryRepository()
    const uuidV4Generator = new UuidV4Generator()
    const createCategoryUseCase = new CreateCategoryUseCase(mySQLCategoryRepository, uuidV4Generator)
    const createdCategory = await createCategoryUseCase.run(createCategoryParams)
    res.status(201).json(createdCategory)
    return
  } catch (err) {
    return next(err)
  }
}
