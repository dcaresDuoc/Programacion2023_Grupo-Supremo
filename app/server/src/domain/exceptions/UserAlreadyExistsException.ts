import { Exception } from './Exception'

export class UserAlreadyExistsException extends Exception {
  constructor () {
    super('User already exists', 'El usuario ya existe', 400)
  }
}
