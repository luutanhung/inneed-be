import { Body, Controller, Get, Post } from "@nestjs/common";
import { RES_CODE } from "src/constants/response.constants";
import { AppResponse } from "src/core/response/app.response";
import { CreateJobDto } from "src/dto/job.dto";
import { JobsService } from "./jobs.service";

@Controller("/api/v1/jobs")
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Post("/post")
  async postJobDescription(@Body() job: CreateJobDto) {
    const createdJob = await this.jobsService.createJob(job);

    return new AppResponse({
      code: RES_CODE.SUCCESS,
      data: createdJob,
    });
  }

  @Get("/")
  findAllJobDescriptions() {
    const jobs = this.jobsService.findAll();

    return new AppResponse({
      code: RES_CODE.SUCCESS,
      data: jobs,
    });
  }
}
