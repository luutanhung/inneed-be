import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v7 as uuidv7 } from "uuid";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "uuid",
    nullable: false,
    default: uuidv7(),
  })
  uuid!: string;

  @CreateDateColumn({
    type: "datetime",
    nullable: false,
    name: "created_at",
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: "datetime",
    nullable: false,
    name: "updated_at",
  })
  updatedAt!: Date;

  @Column({
    default: false,
    name: "is_deleted",
  })
  isDeleted!: boolean;

  @Column({
    type: "datetime",
    nullable: true,
    name: "deleted_at",
  })
  deletedAt!: Date;
}
