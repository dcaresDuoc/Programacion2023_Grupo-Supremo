import { GraphQL } from './GraphQL'

export class App {
  private _graphQL?: GraphQL

  async start (): Promise<void> {
    const port: string = process.env.GRAPHQL_PORT ?? '5000'
    this._graphQL = new GraphQL(port)
    return await this._graphQL.listen()
  }

  async stop (): Promise<void> {
    return await this._graphQL?.stop()
  }
}
