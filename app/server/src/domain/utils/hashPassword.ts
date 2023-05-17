// * DEPENDENCIES
import jwt from 'jsonwebtoken'

// * CONFIGS
import { JWT_SECRET } from '../configs'

import * as bcrypt from 'bcrypt'
import { CreateJwtException } from '../exceptions/CreateJwtException'

// Para que lance error tenemos que pasarle el password undefined o null
export async function hashPassword (rawPassword: string): Promise<string> {
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(rawPassword, salt)
  return hashedPassword
}

// TODO: Esto tendría que separarlo en un archivo aparte
export const compareHash = async (rawPassword: string, hashedPassword: string): Promise<boolean> => {
  const boo = await bcrypt.compare(rawPassword, hashedPassword)
  return boo
}

// TODO: Esto tendría que separarlo en un archivo aparte
export const createJwt = <T extends Object>(tokenData: T): string => {
  try {
    const jwtToken = jwt.sign(tokenData, JWT_SECRET, {
      // 1d
      expiresIn: '1d'
    })
    return jwtToken
  } catch (err) {
    throw new CreateJwtException()
  }
}
