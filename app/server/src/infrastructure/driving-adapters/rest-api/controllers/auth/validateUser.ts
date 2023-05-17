// * TYPES AND INTERFACES
import { NextFunction, Request, Response } from 'express'

export const validateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.status(200).json(req.user)
}
