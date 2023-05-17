// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'

// * USE CASES
import { DeleteUserByIdUseCase } from '../../../../../application/usecases/user/DeleteUserById'

// * REPOSITORIES
import { MySQLUserRepository } from '../../../../implementations/MySQL/MySQLUserRepository'

import { DeleteUserByIdDto } from '../../dtos/user/DeleteUserByIdDto'

export const deleteUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = DeleteUserByIdDto(req)
    const mySQLUserRepo = new MySQLUserRepository()
    const deleteUserByIdUseCase = new DeleteUserByIdUseCase(mySQLUserRepo)
    const deletedUser = await deleteUserByIdUseCase.run(userId)
    res.status(200).json(deletedUser)
    return
  } catch (err) {
    return next(err)
  }
}
