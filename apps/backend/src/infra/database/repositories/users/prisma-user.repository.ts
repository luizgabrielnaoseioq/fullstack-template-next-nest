import { UsersRepository } from "../../../../domain/application/repositories/users-repository"
import { User } from "../../../../domain/enterprise/entities/user"
import { PrismaUserMapper } from "../../prisma/mappers/prisma-user-mapper"
import { PrismaService } from "../../prisma/prisma.service"

export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: PrismaUserMapper.toPrisma(user),
    })
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    })

    if (!user) return null

    return PrismaUserMapper.toDomain(user)
  }
}
