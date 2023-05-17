import { AdminUser } from '../entities/User'

export const isAdminUser = (object: unknown): object is AdminUser => {
  if (object !== null && typeof object === 'object') {
    return 'adminToken' in object
  }

  return false
}
