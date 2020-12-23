import { getRepository, Repository } from "typeorm"
import { VehicleModel } from "../entities"

class VehicleModelsAPI {

   private db: Repository<VehicleModel>

   constructor() {
      this.db = getRepository(VehicleModel)
   }

   public async getAll(): Promise<{ makers: VehicleModel[] }> {
      const makers = await this.db.find()

      return { makers }
   }

   public async get(id: number): Promise<VehicleModel> {
      return this.db.findOne(id)
   }

   public async create(data: Omit<VehicleModel, 'id'>): Promise<VehicleModel> {
      const maker = this.db.create(data)
      const response = await this.db.save(maker)

      return this.get(response.id)
   }

   public async update(id: number, data: VehicleModel): Promise<VehicleModel> {
      const maker = this.db.create({
         ...data,
         id
      })
      const response = await this.db.save(maker)

      return this.get(response.id)
   }

   public async delete(id: number) {
      await this.db.delete(id)
   }

}

export default VehicleModelsAPI
