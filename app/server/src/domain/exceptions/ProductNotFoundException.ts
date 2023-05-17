import { Exception } from './Exception'

export class ProductNotFoundException extends Exception {
  constructor () {
    super('Product not found', 'Producto no encontrado', 404)
  }
}
