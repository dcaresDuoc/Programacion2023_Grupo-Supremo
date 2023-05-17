import { NotFoundException } from '../../../domain/exceptions/NotFoundException'
import { GetUser } from '../../../domain/services/user/GetUser'
import { UpdateUserByIdParams } from '../../../domain/utils/interfaces'
import { User } from '../../../domain/entities/User'
import { UserRepository } from '../../../domain/repositories/UserRepository'

export class UpdateUserByIdUseCase {
  private readonly _userResposiory: UserRepository
  private readonly _getUser: GetUser

  constructor (userRepository: UserRepository) {
    this._userResposiory = userRepository
    this._getUser = new GetUser(userRepository)
  }

  async run (params: UpdateUserByIdParams): Promise<Omit<User, 'password'>> {
    // yo creo que esta validación no debería ir acá sino que simplemente dejar la lógica clean, las validaciones para una REST API y GraphQL debería ir
    // en un DTO y así sucesivamente para las otros driving adapters
    // if (data.id === undefined) { throw new UserMissingFieldExeption() }
    const foundUser = await this._getUser.run({ condition: 'id', conditionValue: params.userId, selections: { id: true, name: true, email: true, password: true } })

    console.log('foundUser')
    console.log(foundUser)
    if (foundUser === null) {
      throw new NotFoundException()
    }

    const user: User = {
      // la diferencia del Nullish Coalescing Operator con el Logical OR es que el Nullish Coalescing Operator solo evalua si el valor es null
      // o undefined, mientras que el Logical OR evalua si el valor es null, undefined, 0, false, NaN, '', etc. Es decir, si yo en mi cuenta de
      // banco tengo 0 dolares y el siguiente valor es 300, con el Logical OR me va a poner 300 porque el 0 lo considera como un valor falso.
      // Entonces, es una buena práctica utilizar el Nullish Coalescing Operator segun lo que vayas hacer.
      id: params.userId,
      name: params.userData.name ?? foundUser.name,
      email: params.userData.email ?? foundUser.email,
      password: params.userData.password ?? foundUser.password
    }
    await this._userResposiory.updateUserById(params.userId, user)
    return { id: user.id, name: user.name, email: user.email }
  }
}
