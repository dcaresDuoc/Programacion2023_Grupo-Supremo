import { Server } from './Server'

export class App {
  server?: Server

  async start (): Promise<void> {
    const port: string = process.env.PORT ?? '4000'
    this.server = new Server(port)
    return await this.server.listen()
  }

  async stop (): Promise<void> {
    return await this.server?.stop()
  }
}
