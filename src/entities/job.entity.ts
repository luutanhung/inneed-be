import { JOB_STATUS } from "src/constants/job.constants";
import type { JobStatus } from "src/types/job.types";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity({
  name: "jobs",
})
export class Job {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "title",
    nullable: false,
  })
  title!: string;

  @CreateDateColumn({
    type: "datetime",
    nullable: false,
    name: "created_at",
  })
  createdAt!: Date;

  @Column({
    type: "datetime",
    nullable: false,
    name: "due_at",
  })
  dueAt!: Date;

  @UpdateDateColumn({
    type: "datetime",
    nullable: false,
    name: "updated_at",
  })
  updatedAt!: Date;

  @Column({
    type: "enum",
    enum: JOB_STATUS,
    nullable: false,
    default: JOB_STATUS.OPEN,
  })
  status!: JobStatus;

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
