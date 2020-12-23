import { Router } from 'express'
import VehicleMakersAPI from '../api/vehicle_makers'

const makers = Router()

makers.get('/', async (req, res) => {
   const api = new VehicleMakersAPI()

   try {
      const makers = await api.getAll()
      res.json(makers)
   } catch {
      res.status(500)
   }

})

makers.post('/', async (req, res) => {
   const api = new VehicleMakersAPI()
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

makers.get('/:id', async (req, res) => {
   const api = new VehicleMakersAPI()
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

makers.put('/:id', async (req, res) => {
   const api = new VehicleMakersAPI()
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

makers.delete('/:id', async (req, res) => {
   const api = new VehicleMakersAPI()
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


export default makers
