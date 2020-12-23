import { Router } from 'express'
import VehicleModelsAPI from '../api/vehicle_models'

const models = Router()

models.get('/', async (req, res) => {
   const api = new VehicleModelsAPI()

   try {
      const makers = await api.getAll()
      res.json(makers)
   } catch {
      res.status(500)
   }

})

models.post('/', async (req, res) => {
   const api = new VehicleModelsAPI()
   const data = req.body

   if (!data)
      return res.status(400)

   try {
      const maker = await api.create(data)
      res.json(maker)
   } catch {
      res.status(500)
   }
})

models.get('/:id', async (req, res) => {
   const api = new VehicleModelsAPI()
   const id = parseInt(req.params.id)

   if (isNaN(id))
      return res.status(400)

   try {
      const maker = await api.get(id)
      res.json(maker)
   } catch {
      res.status(500)
   }
})

models.put('/:id', async (req, res) => {
   const api = new VehicleModelsAPI()
   const id = parseInt(req.params.id)
   const data = req.body

   if (!data || isNaN(id))
      return res.status(400)

   try {
      const maker = await api.update(id, data)
      res.json(maker)
   } catch {
      res.status(500)
   }
})

models.delete('/:id', async (req, res) => {
   const api = new VehicleModelsAPI()
   const id = parseInt(req.params.id)

   if (isNaN(id))
      return res.status(400)

   try {
      await api.delete(id)
      res.json()
   } catch {
      res.status(500)
   }
})


export default models
