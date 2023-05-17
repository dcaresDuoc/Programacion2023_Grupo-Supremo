import { Exception } from './Exception'

export class AlreadyExistsException extends Exception {
  constructor () {
    super('Already exists', 'ya existe', 400)
  }
}
