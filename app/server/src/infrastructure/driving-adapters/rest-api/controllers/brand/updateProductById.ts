import { UpdateBrandByIdParams } from '../../../../../domain/utils/interfaces'
import { UpdateBrandByIdDto } from '../../dtos/brand/UpdateBrandByIdDto'
// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'

// * USE CASES
import { UpdateBrandByIdUseCase } from '../../../../../application/usecases/brand/UpdateBrandById'

// * REPOSITORIES
import { MySQLBrandRepository } from '../../../../implementations/MySQL/MySQLBrandRepository'

export const updateBrandById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updateBrandByIdParams: UpdateBrandByIdParams = UpdateBrandByIdDto(req)
    const mySQLBrandRepository = new MySQLBrandRepository()
    const updateBrandByIdUseCase = new UpdateBrandByIdUseCase(mySQLBrandRepository)
    const updatedBrand = await updateBrandByIdUseCase.run(updateBrandByIdParams)
    res.status(200).json(updatedBrand)
    return
  } catch (err) {
    return next(err)
  }
}
