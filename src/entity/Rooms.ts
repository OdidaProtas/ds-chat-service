import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column({
    default: false,
  })
  isInviteOnly: boolean;

  @Column({
    nullable: true,
  })
  imageUrl: string;
}
