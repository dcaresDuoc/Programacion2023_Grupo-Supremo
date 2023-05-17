import express from 'express'
/* import cors from 'cors' */
import * as http from 'http'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema'

// Cambiamos nombre
export class GraphQL {
  private readonly _port: string
  private readonly _app: express.Express
  private _httpServer?: http.Server
  // agregamos a apolo
  private readonly _apolloServer: ApolloServer

  constructor (port: string) {
    this._port = port
    this._app = express()
    /* this._app.use(cors({
      origin: ['http://127.0.0.1:3000'],
      credentials: true
    })) */
    this._apolloServer = new ApolloServer({
      schema
    })
  }

  async listen (): Promise<void> {
    await this._apolloServer.start()
    this._apolloServer.applyMiddleware({ app: this._app, path: '/graphql' })

    return await new Promise(resolve => {
      this._httpServer = this._app.listen(this._port, () => {
        console.log(`http://localhost:${this._port}${this._apolloServer.graphqlPath}`)
        resolve()
      })
    })
  }

  async stop (): Promise<void> {
    return await new Promise((resolve, reject) => {
      if (this._httpServer != null) {
        this._httpServer.close(error => {
          if (error != null) {
            return reject(error)
          }
          return resolve()
        })
      }
      return resolve()
    })
  }
}
