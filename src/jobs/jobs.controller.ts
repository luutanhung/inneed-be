import { Controller, Get } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { AppResponse } from "src/core/response/app.response";
import { RES_CODE } from "src/constants/response.constants";

@Controller("jobs")
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  findAll() {
    const jobs = this.jobsService.findAll();

    return new AppResponse({
      code: RES_CODE.SUCCESS,
      data: jobs,
    });
  }
}
