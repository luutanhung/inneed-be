import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Job } from "src/entities/job.entity";
import { Repository } from "typeorm";

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepo: Repository<Job>,
  ) {}

  findAll(): Promise<Job[]> {
    return this.jobsRepo.find();
  }
}
