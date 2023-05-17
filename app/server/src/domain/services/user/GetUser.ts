import { GetUserParams, UserSelections } from '../../utils/interfaces'
import { User } from '../../entities/User'
import { UserRepository } from '../../repositories/UserRepository'

/* export type FindUserConditions = Partial<{
  id: number
  name: string
  email: string
}> */

// Esta tecnica lo saqué del main nestjs del chat platform con nestjs https://github.com/stuyy/chat-platform-nestjs
// y también lo aplicó en https://github.com/stuyy/money-transfer-api
// Este lo estoy viendo como un mini caso de uso por eso le paso el getUserParams
// Si esto lo puede hacer TypeORM y también prisma, entonces todos pueden probablemente hacerlo
// Por lo tanto, mas adelante podríamos cambiarnos de mysql a postgress o a mongo o a lo que sea y no tendríamos que cambiar nada de código
export class GetUser {
  private readonly _userResposiory: UserRepository

  constructor (userRepository: UserRepository) {
    this._userResposiory = userRepository
  }

  async run (getUserParams: GetUserParams): Promise<User | null> {
    const userSelections: UserSelections = { id: getUserParams.selections.id ?? false, name: getUserParams.selections.name ?? false, email: getUserParams.selections.email ?? false, password: getUserParams.selections.password ?? false }

    const foundUser = await this._userResposiory.getUser(getUserParams.condition, getUserParams.conditionValue, userSelections)
    return foundUser as User
  }
}
