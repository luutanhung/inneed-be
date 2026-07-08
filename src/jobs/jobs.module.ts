import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Job } from "src/entities/job.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  providers: [JobsService],
})
export class JobsModule {}
