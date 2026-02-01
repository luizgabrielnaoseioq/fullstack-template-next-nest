import { Module } from "@nestjs/common";
import { CreateUserController } from "./create-user.controller";
import { CreateUserUseCase } from "../../../../domain/application/use-cases/create-user";
import { PrismaUsersRepository } from "../../../database/repositories/users/prisma-user.repository";
import { UsersRepository } from "../../../../domain/application/repositories/users-repository";

@Module({
  controllers: [CreateUserController],
  providers: [
    CreateUserUseCase,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
})
export class UserModule {}