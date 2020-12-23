import "reflect-metadata"
import { createConnection } from "typeorm"

import entities from '../entities/list'

const createDBConn = async () => {
   await createConnection({
      type: process.env['DB_TYPE'] as "mysql",
      host: process.env['DB_HOST'],
      port: +process.env['DB_PORT'],
      username: process.env['DB_USER'],
      password: process.env['DB_PASSWORD'],
      database: process.env['DB_NAME'],
      synchronize: true,
      logging: false,
      extra: {
         socketPath: process.env['DB_SOCKET']
      },
      entities: entities,
   })
}

export default createDBConn