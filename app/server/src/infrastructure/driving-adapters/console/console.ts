// * Entities
import { User } from '../../../domain/entities/User'
// * Use Cases
import { GetAllUserUseCase } from '../../../application/usecases/user/GetAllUser'
import { CreateUserUseCase } from '../../../application/usecases/user/CreateUser'
import { UpdateUserByIdUseCase } from '../../../application/usecases/user/UpdateUserById'
import { DeleteUserByIdUseCase } from '../../../application/usecases/user/DeleteUserById'
// * Repositories
// import { InMemoryUserRepository } from '../../../infrastructure/implementations/InMemory/InMemoryUserRepository'
import { MySQLUserRepository } from '../../../infrastructure/implementations/MySQL/MySQLUserRepository'

(async () => {
// const inMemoryUserRepo = new InMemoryUserRepository()
  const mySQLUserRepo = new MySQLUserRepository()

  // Acá aplica injection of dependencies
  const getAllUserUseCase = new GetAllUserUseCase(mySQLUserRepo)
  const createUserUseCase = new CreateUserUseCase(mySQLUserRepo)
  const updateUserByIdUseCase = new UpdateUserByIdUseCase(mySQLUserRepo)
  const deleteUserByIdUseCase = new DeleteUserByIdUseCase(mySQLUserRepo)

  const newUser: User = {
    id: '123',
    name: 'Leandro Code',
    email: 'lmarcelos2019@gmail.com',
    password: '123456'
  }
  const createdUser = await createUserUseCase.run(newUser)
  console.log('Create User in Memory')
  console.log(createdUser)

  setTimeout(async () => {
    await updateUserByIdUseCase.run('123', {
      id: '123',
      name: 'Leandro Code uu',
      email: 'lmarcelos2019@gmail.com uu',
      password: '123456 uu'
    })
    console.log('Update User in Memory')
  }, 10000)
  setTimeout(async () => {
    const users = await getAllUserUseCase.run()
    console.log('GetAll in Memory')
    console.log(users)
  }, 20000)
  setTimeout(async () => {
    const deletedUser = await deleteUserByIdUseCase.run('123')
    console.log('Delete in Memory')
    console.log(deletedUser)
  }, 30000)
  setTimeout(async () => {
    const users2 = await getAllUserUseCase.run()
    console.log('GetAll in Memory')
    console.log(users2)
  }, 40000)
})()
