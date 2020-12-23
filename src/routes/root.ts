import { Router } from 'express'

const root = Router()

root.get('/', (req, res) => {
  res.json("API root")
})

export default root
