import { Exception } from './Exception'

export class UserNotFoundException extends Exception {
  constructor () {
    super('User not found', 'Usuario no encontrado', 404)
  }
}
