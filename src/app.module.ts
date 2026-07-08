import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "./config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get<string>("mysql.host"),
        port: configService.get<number>("mysql.port"),
        username: configService.get<string>("mysql.username"),
        password: configService.get<string>("mysql.password"),
        database: configService.get<string>("mysql.database"),
        autoLoadEntities: true,
        synchronize: configService.get<boolean>("mysql.synchronize"),
      }),
    }),
  ],
})
export class AppModule {}
