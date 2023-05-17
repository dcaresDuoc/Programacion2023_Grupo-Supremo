import { FindUserConditions, FindUserValues, UserSelections } from './../../../domain/utils/interfaces'
import { User } from '../../../domain/entities/User'
import { UserRepository } from '../../../domain/repositories/UserRepository'
import prismaClient from '../../prismaClient'

export class MySQLUserRepository implements UserRepository {
  // private readonly _db = DynamoDB.getInstance()

  async getAllUser (): Promise<User[]> {
    const users = await prismaClient.user.findMany()
    return users
  }

  async createUser (user: User): Promise<void> {
    // tendríamos que retornar un error si no pasan el user con todas sus propiedades
    await prismaClient.user.create({
      data: user
    })
  }

  async updateUserById (userId: string, user: User): Promise<void> {
    await prismaClient.user.update({
      where: {
        id: userId
      },
      data: user
    })
  }

  async deleteUserById (userId: string): Promise<void> {
    await prismaClient.user.delete({
      where: {
        id: userId
      }
    })
  }

  async getUser (condition: FindUserConditions, conditionValue: FindUserValues, selections: UserSelections): Promise<Partial<User> | null> {
    const foundUser = await prismaClient.user.findFirst({
      where: {
        [condition]: conditionValue
      },
      select: selections
    })
    return foundUser
  }
}
