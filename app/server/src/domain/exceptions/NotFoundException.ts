import { Exception } from './Exception'

export class NotFoundException extends Exception {
  constructor () {
    super('Not found', 'No encontrado', 404)
  }
}
