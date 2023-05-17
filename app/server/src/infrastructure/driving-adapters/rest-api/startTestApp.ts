import { Server } from './Server'

const port: string = process.env.PORT ?? '4000'
const server = new Server(port)
export default server._app
