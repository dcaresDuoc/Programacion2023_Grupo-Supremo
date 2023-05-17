/* import path from 'path'
import * as dotenv from 'dotenv' */
import { App as RestApiApp } from './rest-api/App'
import { App as GraphQLApp } from './graphql/App'

try {
  /* dotenv.config({
    path: path.resolve(__dirname, '../../../.env')
  }) */
  console.log('Starting apps...')
  new RestApiApp().start()
  new GraphQLApp().start()
} catch (err) {
  console.log(err)
}
