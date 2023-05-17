import { GetUser } from '../../../domain/services/user/GetUser'
import { UserRepository } from '../../../domain/repositories/UserRepository'
import { UserAlreadyExistsException } from '../../../domain/exceptions/UserAlreadyExistsException'
import { createJwt, hashPassword } from '../../../domain/utils/hashPassword'
import { AuthenticatedUser, RegisterUserParams } from '../../../domain/utils/interfaces'
import { UuidGenerator } from '../../../domain/utils/UuidGenerator'
import { User } from '../../../domain/entities/User'

export class RegisterUserUseCase {
  private readonly _userRespository: UserRepository
  private readonly _getUser: GetUser
  private readonly _uuidGenerator: UuidGenerator

  constructor (userRepository: UserRepository, uuidGenerator: UuidGenerator) {
    this._userRespository = userRepository
    this._getUser = new GetUser(userRepository)
    this._uuidGenerator = uuidGenerator
  }

  async run (params: RegisterUserParams): Promise<AuthenticatedUser> {
    const foundUser = await this._getUser.run({ condition: 'email', conditionValue: params.userData.email, selections: { id: true } })
    if (foundUser !== null) { throw new UserAlreadyExistsException() }

    const userId = this._uuidGenerator.generate()
    const user: User = { ...params.userData, id: userId }
    user.password = await hashPassword(user.password)
    await this._userRespository.createUser(user)

    const sessionJwt = createJwt({
      id: userId,
      name: user.name,
      email: user.email
    })
    // El tipado del omit es importante porque así si alguien llegara agregarlo, saltaría error
    const currentUser: Omit<User, 'password'> = { id: userId, name: user.name, email: user.email }

    return {
      sessionJwt,
      currentUser
    }
  }
}
