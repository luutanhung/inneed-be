import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Job } from "src/entities/job.entity";
import { JobsController } from "./jobs.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  providers: [JobsService],
  controllers: [JobsController],
})
export class JobsModule {}
