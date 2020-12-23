import express from 'express'
import cors from 'cors'

import root from './routes/root'
import vehicle_makers from './routes/vehicle_makers'
import vehicle_models from './routes/vehicle_models'

const app = express()

app.use(express.json())
app.use('*', cors())

app.use('/', root)

app.use('/makers', vehicle_makers)
app.use('/models', vehicle_models)

export default app
