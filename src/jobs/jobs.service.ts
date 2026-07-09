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

  async createJob(job: CreateJobDto) {
    const newJob = this.jobsRepo.create({
      title: job.title,
      status: job.status,
      createdAt: job.createdAt,
      dueAt: job.dueAt,
    });

    const savedJob = await this.jobsRepo.save(newJob);

    return savedJob;
  }

  findAll(): Promise<Job[]> {
    return this.jobsRepo.find();
  }
}
