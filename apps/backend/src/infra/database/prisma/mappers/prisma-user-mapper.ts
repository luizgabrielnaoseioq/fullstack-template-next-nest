import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"
import { User } from "../../../../domain/enterprise/entities/user"

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      isActive: user.isActive,
      createdAt: user.createdAt,
    }
  }

  static toDomain(raw: any): User {
    return new User(
      {
        name: raw.name,
        email: raw.email,
        password: raw.password,
        isActive: raw.isActive,
        createdAt: raw.createdAt,
      },
      new UniqueEntityID(raw.id),
    )
  }
}
