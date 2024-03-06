import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase/createUserUseCase';
import { CreateUserBody } from './dtos/createUserBody';

@Controller('users')
export class UserController {
  constructor(private CreateUseCase: CreateUserUseCase) {}
  @Post()
  async createPost(@Body() body: CreateUserBody) {
    const { email, name, password } = body;

    const user = await this.CreateUseCase.execute({
      email,
      name,
      password,
    });
    return user;
  }

  @Get()
  async getHello() {
    const hellow = 'hellow world';
    return hellow;
  }
}
