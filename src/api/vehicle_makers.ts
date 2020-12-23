import { getRepository, Repository } from "typeorm"
import { VehicleMaker } from "../entities"

class VehicleMakersAPI {

   private db: Repository<VehicleMaker>

   constructor() {
      this.db = getRepository(VehicleMaker)
   }

   public async getAll(): Promise<{ makers: VehicleMaker[] }> {
      const makers = await this.db.find()

      return { makers }
   }

   public async get(id: number): Promise<VehicleMaker> {
      return this.db.findOne(id)
   }

   public async create(data: Omit<VehicleMaker, 'id'>): Promise<VehicleMaker> {
      const maker = this.db.create(data)
      return this.db.save(maker)
   }

   public async update(id: number, data: VehicleMaker): Promise<VehicleMaker> {
      const maker = this.db.create({
         ...data,
         id
      })
      return this.db.save(maker)
   }

   public async delete(id: number) {
      await this.db.delete(id)
   }

}

export default VehicleMakersAPI
