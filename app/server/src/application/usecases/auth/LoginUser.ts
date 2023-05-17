import { GetUser } from '../../../domain/services/user/GetUser'
import { UserRepository } from '../../../domain/repositories/UserRepository'
import { compareHash, createJwt } from '../../../domain/utils/hashPassword'
import { AuthenticatedUser, LoginUserParams } from '../../../domain/utils/interfaces'
import { InvalidCredentialsException } from '../../../domain/exceptions/auth/InvalidCredentialsException'

export class LoginUserUseCase {
  private readonly _getUser: GetUser

  constructor (userRepository: UserRepository) {
    this._getUser = new GetUser(userRepository)
  }

  async run (params: LoginUserParams): Promise<AuthenticatedUser> {
    const foundUser = await this._getUser.run({ condition: 'email', conditionValue: params.userData.email, selections: { id: true, name: true, email: true, password: true } })
    if (foundUser === null) { throw new InvalidCredentialsException() }

    const isMatch = await compareHash(
      params.userData.password,
      foundUser.password
    )
    if (!isMatch) { throw new InvalidCredentialsException() }

    const sessionJwt = createJwt({
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email
    })

    // Si borramos password y ponemos name salta error, ta bueno el tipado ts
    const { password, ...currentUser } = foundUser

    return {
      sessionJwt,
      currentUser
    }
  }
}
