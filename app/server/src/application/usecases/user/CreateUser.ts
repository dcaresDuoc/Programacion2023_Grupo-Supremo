import { GetUser } from '../../../domain/services/user/GetUser'
import { User } from '../../../domain/entities/User'
import { UserRepository } from '../../../domain/repositories/UserRepository'
import { UserAlreadyExistsException } from '../../../domain/exceptions/UserAlreadyExistsException'
import { CreateUserParams } from '../../../domain/utils/interfaces'
import { UuidGenerator } from '../../../domain/utils/UuidGenerator'

export class CreateUserUseCase {
  private readonly _userRespository: UserRepository
  private readonly _getUser: GetUser
  private readonly _uuidGenerator: UuidGenerator

  constructor (userRepository: UserRepository, uuidGenerator: UuidGenerator) {
    this._userRespository = userRepository
    this._getUser = new GetUser(userRepository)
    this._uuidGenerator = uuidGenerator
  }

  // Anteriormente uno desde el controlador le enviaba un usuario, ahora vamos a pasarle los datos de manera primitiva y el caso de uso se encarga de crear el usuario.
  async run (params: CreateUserParams): Promise<Omit<User, 'password'>> {
    const foundUser = await this._getUser.run({ condition: 'email', conditionValue: params.userData.email, selections: { id: true } })
    if (foundUser?.id !== null) throw new UserAlreadyExistsException()

    const user: User = { ...params.userData, id: this._uuidGenerator.generate() }
    await this._userRespository.createUser(user)
    return { id: user.id, name: user.name, email: user.email }
  }
}
