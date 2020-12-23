import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { VehicleMaker } from './VehicleMaker'

enum VehicleClass {
   SUV = "SUV",
   SEDAN = "Sedan",
   TRUCK = "Truck",
   VAN = "Van",
   PICKUP_TRUCK = "Pickup Truck",
   BUS = "Bus"
}

enum EngineType {
   INTERNAL_COMBUSTION = "Internal Combustion",
   PLUG_IN_HYBRID = "Plug-In Hybrid",
   BATTERY_ELECTRIC = "Battery Electric"
}

@Entity()
export class VehicleModel {

   @PrimaryGeneratedColumn()
   id: number

   @Column()
   makerId?: number

   @ManyToOne(() => VehicleMaker, { cascade: true, onDelete: "CASCADE", eager: true })
   @JoinColumn()
   maker?: VehicleMaker

   @Column()
   name: string

   @Column({
      type: "enum",
      enum: VehicleClass
   })
   vehicleClass: VehicleClass

   @Column()
   engineType: EngineType

}