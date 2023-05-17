import { User } from './../../../domain/entities/User'
import { GetUser } from '../../../domain/services/user/GetUser'
import { UserRepository } from '../../../domain/repositories/UserRepository'
import { NotFoundException } from '../../../domain/exceptions/NotFoundException'

export class DeleteUserByIdUseCase {
  private readonly _userRespository: UserRepository
  private readonly _getUser: GetUser

  constructor (userRepository: UserRepository) {
    this._userRespository = userRepository
    this._getUser = new GetUser(userRepository)
  }

  async run (userId: string): Promise<Omit<User, 'password'>> {
    // TODO: Quizas debería validar de que pasa si me inserta un id y me manda un number xd, me rompe todo
    const foundUser = await this._getUser.run({ condition: 'id', conditionValue: userId, selections: { id: true, name: true, email: true } })
    console.log('foundUser')
    console.log(foundUser)
    if (foundUser === null) {
      throw new NotFoundException()
    }
    this._userRespository.deleteUserById(userId)
    return foundUser as Omit<User, 'password'>
  }
}
