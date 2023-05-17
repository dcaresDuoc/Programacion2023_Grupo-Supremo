// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'

// * CONFIGS
import { SESSION_COOKIE_NAME } from '../../../../../domain/configs'

export const logoutUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.clearCookie(SESSION_COOKIE_NAME, {
    httpOnly: true,
    secure: true,
    sameSite: 'none'
  }).sendStatus(204)
}
