// src/infra/http/controllers/create-user.controller.ts
import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserUseCase } from '../../../../domain/application/use-cases/create-user'

@Controller('users')
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async handle(@Body() body: any) {
    const user = await this.createUserUseCase.execute(body)

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      isActive: user.isActive,
    }
  }
}
