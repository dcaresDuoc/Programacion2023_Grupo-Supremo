import request from 'supertest'
import { User } from '../../../../../src/domain/entities/User'

import app from '../../../../../src/infrastructure/driving-adapters/rest-api/startTestApp'

// divide the tests into groups and subgroups test that always pass and test that always fail
describe('Auth routes', () => {
  describe('Auth Fail', () => {
    test('Login', async () => {
      const userData: Pick<User, 'email' | 'password'> = {
        email: 'noExistEmail@gmail.com',
        password: 'noExistPassword'
      }

      const response = await request(app).post('/api/auth/login').send(userData)
      expect(response.statusCode).toBe(400)
      expect(response.body).toEqual({ message: 'Invalid credentials' })
    })
  })

  describe('Auth Pass', () => {
    test('Login', async () => {
      const userData: Pick<User, 'email' | 'password'> = {
        email: 'kelvin12378945610@gmail.com',
        password: 'kelvin123'
      }

      const response = await request(app).post('/api/auth/login').send(userData)
      expect(response.statusCode).toBe(200)
      expect(response.body).toHaveProperty('currentUser')
      expect(response.body).toHaveProperty('sessionJwt')
      expect(response.body.currentUser).toBeInstanceOf(Object)
    })
  })
})
