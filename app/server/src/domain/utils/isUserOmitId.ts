import { User } from '../entities/User'

export const isUserOmitId = (object: Object): object is Omit<User, 'id'> => {
  const requiredBodyFields = {
    name: '',
    email: '',
    password: ''
  }

  return JSON.stringify(Object.keys(object)) === JSON.stringify(Object.keys(requiredBodyFields))
}
