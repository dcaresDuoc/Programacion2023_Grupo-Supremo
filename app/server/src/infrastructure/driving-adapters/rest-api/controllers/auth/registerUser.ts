// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'
import { AuthenticatedUser } from '../../../../../domain/utils/interfaces'

// * USE CASES
import { RegisterUserUseCase } from '../../../../../application/usecases/auth/RegisterUser'

// * REPOSITORIES
import { MySQLUserRepository } from '../../../../implementations/MySQL/MySQLUserRepository'

import { UuidV4Generator } from '../../../../utils/UuidV4Generator'

// * DTOS
import { RegisterUserDto } from '../../dtos/auth/RegisterUserDto'
import { SESSION_COOKIE_NAME } from '../../../../../domain/configs'

export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const registerUserParams = RegisterUserDto(req)
    const mySQLUserRepo = new MySQLUserRepository()
    const uuidV4Generator = new UuidV4Generator()
    const registerUserUseCase = new RegisterUserUseCase(mySQLUserRepo, uuidV4Generator)
    const authenticatedUser: AuthenticatedUser | null = await registerUserUseCase.run(registerUserParams)
    res.cookie(SESSION_COOKIE_NAME, authenticatedUser.sessionJwt, {
      httpOnly: true,
      secure: process.env.ENV_MODE === 'production',
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
    }).status(201).json(authenticatedUser)
  } catch (err) {
    return next(err)
  }
}
