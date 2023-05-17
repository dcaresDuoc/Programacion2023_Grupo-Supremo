// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'

// * USE CASES
import { DeleteProductByIdUseCase } from '../../../../../application/usecases/product/DeleteProductById'

// * REPOSITORIES
import { MySQLProductRepository } from '../../../../implementations/MySQL/MySQLProductRepository'

// * DTO
import { DeleteProductByIdDto } from '../../dtos/product/DeleteProductByIdDto'

export const deleteProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const productId = DeleteProductByIdDto(req)
    const mySQLProductRepo = new MySQLProductRepository()
    const deleteProductByIdUseCase = new DeleteProductByIdUseCase(mySQLProductRepo)
    const deletedProduct = await deleteProductByIdUseCase.run(productId)
    res.status(200).json(deletedProduct)
    return
  } catch (err) {
    return next(err)
  }
}
