import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateJobDto } from "src/dto/job.dto";
import { Job } from "src/entities/job.entity";
import { Repository } from "typeorm";

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepo: Repository<Job>,
  ) {}

  createJob(job: CreateJobDto) {
    return this.jobsRepo.create({
      title: job.title,
      status: job.status,
      createdAt: job.createdAt,
    });
  }

  findAll(): Promise<Job[]> {
    return this.jobsRepo.find();
  }
}
