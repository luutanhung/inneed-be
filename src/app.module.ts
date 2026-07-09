import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "./config";
import { JobsModule } from "./jobs/jobs.module";
import { ZodSerializerInterceptor, ZodValidationPipe } from "nestjs-zod";
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { HttpExceptionFilter } from "./shared/filters/httpException.filter";
import { UsersModule } from "./users/users.module";

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
        retryAttempts: 10,
        retryDelay: 3000,
        autoLoadEntities: true,
        synchronize: configService.get<boolean>("mysql.synchronize"),
      }),
    }),
    JobsModule,
    UsersModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
