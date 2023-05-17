// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'

// * USE CASES
import { UpdateUserByIdUseCase } from '../../../../../application/usecases/user/UpdateUserById'

// * REPOSITORIES
import { MySQLUserRepository } from '../../../../implementations/MySQL/MySQLUserRepository'
import { UpdateUserByIdParams } from '../../../../../domain/utils/interfaces'
import { UpdateUserByIdDto } from '../../dtos/user/UpdateUserByIdDto'

// * UTILS

export const updateUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updateUserByIdParams: UpdateUserByIdParams = UpdateUserByIdDto(req)
    const mySQLUserRepo = new MySQLUserRepository()
    const updateUserByIdUseCase = new UpdateUserByIdUseCase(mySQLUserRepo)
    const updatedUser = await updateUserByIdUseCase.run(updateUserByIdParams)
    res.status(200).json(updatedUser)
    return
  } catch (err) {
    return next(err)
  }
}
