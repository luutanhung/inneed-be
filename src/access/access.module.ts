import { Module } from "@nestjs/common";
import { AccessController } from "./access.controller";
import { AccessService } from "./access.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AccessController],
  providers: [AccessService],
})
export class AccessModule {}
