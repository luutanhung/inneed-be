import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string(),
  password: z.string(),
  createdAt: z.iso.datetime(),
});

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
