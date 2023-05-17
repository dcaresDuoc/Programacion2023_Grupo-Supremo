import { Exception } from './Exception'

export class CreateJwtException extends Exception {
  constructor () {
    super('Error creating jwt', 'Error creando jwt', 500)
  }
}
