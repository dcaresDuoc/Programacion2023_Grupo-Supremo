import { User } from '../entities/User'

export const isUser = (object: unknown): object is User => {
  if (object !== null && typeof object === 'object') {
    return !('adminToken' in object)
  }

  return false
}
