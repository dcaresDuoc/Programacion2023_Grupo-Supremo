import { User } from '../../../domain/entities/User'
import { UserRepository } from '../../../domain/repositories/UserRepository'
export class InMemoryUserRepository implements UserRepository {
  private usersInMemory: User[] = []

  async getAllUser (): Promise<User[]> {
    return this.usersInMemory
  }

  async createUser (user: User): Promise<User> {
    this.usersInMemory.push(user)
    return user
  }

  async getUserByEmail (email: string): Promise<User | null> {
    const foundUser = this.usersInMemory.find((u) => u.email === email)
    if (foundUser === undefined) return null

    return foundUser
  }

  async updateUserById (userId: string, user: User): Promise<User> {
    const updatedUsers: User[] = []
    let updatedUser: User = { id: '', name: '', email: '', password: '' }
    for (const u of this.usersInMemory) {
      if (u.id === userId) {
        updatedUser = Object.assign(u, user)
        updatedUsers.push(updatedUser)
      }
      updatedUsers.push(u)
    }
    this.usersInMemory = updatedUsers
    return user
  }

  async deleteUserById (userId: string): Promise<void> {
    const users = this.usersInMemory.filter((u) => u.id !== userId)
    this.usersInMemory = users
  }

  async getUserById (userId: string): Promise<User | null> {
    const userFound = this.usersInMemory.find((u) => u.id === userId)
    if (userFound === undefined) return null

    return userFound
  }
}
