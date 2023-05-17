import { UserSelections, FindUserConditions, FindUserValues } from '../utils/interfaces'
import { User } from '../entities/User'

export interface UserRepository {
  // El retorno va con respecto a que retornaría el método en si, por ejemplo el buscar o te tirá el usuario porque lo encontró la DB o un null porque no lo encontró. Los errores ya son manejados por el caso de uso
  getAllUser: () => Promise<User[]>
  // en vez de que se llame save podría ser create para que sea mas estandar, pero como se usan muchas clases se extiende a la perfección a que se refiere save
  createUser: (user: User) => Promise<void>
  updateUserById: (userId: string, user: User) => Promise<void>
  deleteUserById: (userId: string) => Promise<void>
  getUser: (condition: FindUserConditions, conditionValue: FindUserValues, selections: UserSelections) => Promise<Partial<User> | null>
}
