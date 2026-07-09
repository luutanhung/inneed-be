import { createZodDto } from "nestjs-zod";
import { JOB_STATUS } from "src/constants/job.constants";
import { z } from "zod";

const CreateJobSchema = z.object({
  title: z.string(),
  status: z.enum(Object.values(JOB_STATUS)).default(JOB_STATUS.OPEN),
  createdAt: z.iso.datetime(),
});

export class CreateJobDto extends createZodDto(CreateJobSchema) {}
