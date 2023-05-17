import * as dotenv from 'dotenv'
import { App } from './App'

try {
  // esto lo hace para cargar las variables de entorno de AWS y poder conectarse, así mismo como lo hizo en la aplicación
  // de consola que tuvo que cargar las variables de entorno para poder conectarse a la base de datos
  dotenv.config({
    // que hace resolve
    // path: path.resolve(__dirname, '../../../../.env')
    path: '.env.development'
  })

  new App().start()
} catch (err) {
  console.log(err)
}
