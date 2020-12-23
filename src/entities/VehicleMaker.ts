import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class VehicleMaker {

   @PrimaryGeneratedColumn()
   id: number

   @Column()
   name: string

   @Column()
   location: string

}