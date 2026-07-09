import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/dto/user.dto";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { v7 as uuidv7 } from "uuid";
import { hashPassword } from "./access.utils";

@Injectable()
export class AccessService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const hashedPassword = await hashPassword(createUserDto.password);

    const newUser = this.usersRepo.create({
      uuid: uuidv7(),
      email: createUserDto.email,
      hashedPassword,
      createdAt: createUserDto.createdAt,
    });

    const savedUser = await this.usersRepo.save(newUser);

    return savedUser;
  }
}
