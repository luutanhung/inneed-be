import { InternalServerErrorException } from "@nestjs/common";
import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
  const saltRounds: number = 12;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return hashedPassword;
    // eslint-disable-next-line
  } catch (err: unknown) {
    throw new InternalServerErrorException();
  }
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}
