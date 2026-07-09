import { JOB_STATUS } from "src/constants/job.constants";

export type JobStatus = (typeof JOB_STATUS)[keyof typeof JOB_STATUS];
