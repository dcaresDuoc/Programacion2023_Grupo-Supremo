// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'
import { UpdateProductByIdParams } from '../../../../../domain/utils/interfaces'

// * USE CASES
import { UpdateProductByIdUseCase } from '../../../../../application/usecases/product/UpdateProductById'

// * REPOSITORIES
import { MySQLProductRepository } from '../../../../implementations/MySQL/MySQLProductRepository'

// * DTO
import { UpdateProductByIdDto } from '../../dtos/product/UpdateProductByIdDto'

export const updateProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updateProductByIdParams: UpdateProductByIdParams = UpdateProductByIdDto(req)
    const mySQLProductRepo = new MySQLProductRepository()
    const updateProductByIdUseCase = new UpdateProductByIdUseCase(mySQLProductRepo)

    const updatedProduct = await updateProductByIdUseCase.run(updateProductByIdParams)
    res.status(200).json(updatedProduct)
    return
  } catch (err) {
    return next(err)
  }
}
