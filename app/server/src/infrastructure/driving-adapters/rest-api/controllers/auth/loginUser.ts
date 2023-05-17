// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'
import { AuthenticatedUser, LoginUserParams } from '../../../../../domain/utils/interfaces'

// * USE CASES
import { LoginUserUseCase } from '../../../../../application/usecases/auth/LoginUser'

// * REPOSITORIES
import { MySQLUserRepository } from '../../../../implementations/MySQL/MySQLUserRepository'

// * DTOS
import { LoginUserDto } from '../../dtos/auth/LoginUserDto'
import { SESSION_COOKIE_NAME } from '../../../../../domain/configs'

export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const loginUserParams: LoginUserParams = LoginUserDto(req)
    const mySQLUserRepo = new MySQLUserRepository()
    const loginUserUseCase = new LoginUserUseCase(mySQLUserRepo)
    const authenticatedUser: AuthenticatedUser = await loginUserUseCase.run(loginUserParams)
    res.cookie(SESSION_COOKIE_NAME, authenticatedUser.sessionJwt, {
      httpOnly: true,
      secure: process.env.ENV_MODE === 'production',
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
    })
    res.status(200).json(authenticatedUser)
    return
  } catch (err) {
    return next(err)
  }
}
