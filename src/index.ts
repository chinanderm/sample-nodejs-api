require('dotenv').config({path: __dirname + '/./../.env'})
import createDBConn from "./config/create_connection"
import app from './app'

const port = process.env.PORT || 3001;

(async () => {

   await createDBConn()

   app.listen(port, () => {
      console.log(`Listening on port ${port}`)
   })
})()