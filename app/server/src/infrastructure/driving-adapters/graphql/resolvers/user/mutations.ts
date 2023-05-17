import { HandlerError } from '../../utils/HandlerError'
import { CreateUserUseCase } from '../../../../../application/usecases/user/CreateUser'
import { UuidV4Generator } from '../../../../utils/UuidV4Generator'
import { MySQLUserRepository } from '../../../../implementations/MySQL/MySQLUserRepository'
import { CreateUserParams } from '../../../../../domain/utils/interfaces'

const userMutatios = {
  // Acá es super importante que se llame igual como lo definimos en nuestros typedefs
  // Si en nuestros typedefs definimos createUser(name: String, email: Int, password: String) entonces en los args recibiriamos { name, email, password }
  // Si en nuestros typedefs definimos createUser(user: UserCreateInput) entonces en los args recibiriamos { user: { name, email, password } }
  createUser: async (root: any, args: any) => {
    try {
      // const req = { body: args.user }
      // const createUserParams: CreateUserParams = CreateUserDto(req)
      const createUserParams = args.user as CreateUserParams
      const mySQLUserRepo = new MySQLUserRepository()
      const uuidV4Generator = new UuidV4Generator()
      const createUserUseCase = new CreateUserUseCase(mySQLUserRepo, uuidV4Generator)
      const createdUser = await createUserUseCase.run(createUserParams)
      return createdUser
    } catch (err) {
      return HandlerError.run(err)
    }
  }
}

export default userMutatios
