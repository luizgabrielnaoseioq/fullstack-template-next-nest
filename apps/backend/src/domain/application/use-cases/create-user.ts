import { UsersRepository } from '../repositories/users-repository'
import { CreateUserDTO } from '../dtos/create-user.dto'
import { User } from '../../enterprise/entities/user'

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const userAlreadyExists =
      await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('Usuário já existe')
    }

    const user = new User({
      name: data.name,
      email: data.email,
      password: data.password,
      isActive: true,
    })

    await this.usersRepository.create(user)

    return user
  }
}
