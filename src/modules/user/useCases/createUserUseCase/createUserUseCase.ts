import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entities/user';
import { hash } from 'bcrypt';

interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepostory: UserRepository) {}

  async execute({ email, name, password }: CreateUserRequest) {
    const user = new User({
      email,
      name,
      password: await hash(password, 10),
    });

    await this.userRepostory.create(user);
    return user
  }
}
