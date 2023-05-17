import request from 'supertest'

import app from '../src/infrastructure/driving-adapters/rest-api/startTestApp'

describe('Test REST API', () => {
  test('First Endpoint', async () => {
    const res = await request(app).get('/')
    expect(res.body).toEqual({ message: 'Ecommerce REST API.' })
  })
})
