import { create } from 'domain';
import { CreateUserUseCase } from './createUserUseCase';
import { UserRepositoryInMemory } from '../../repositories/UserRepositoryINMEMORY';
import { compare } from 'bcrypt';

describe('Create User', () => {
  let createUserUseCase: CreateUserUseCase;
  let userRepositoryInMemory: UserRepositoryInMemory;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('Show be able to create user', async () => {
    expect(userRepositoryInMemory.users).toEqual([]);

    const user = await createUserUseCase.execute({
      email: 'email@email.com',
      name: 'Carlos',
      password: '123123',
    });

    expect(userRepositoryInMemory.users).toEqual([user]);
  });

  it('Show be able to create user with password encrypted', async () => {
    expect(userRepositoryInMemory.users).toEqual([]);
    const userPasswordWithoutEncryption = "123123"

    const user = await createUserUseCase.execute({
      email: 'email@email.com',
      name: 'Carlos',
      password: '123123',
    });

    const userHasPasswordEncrypted = await compare(userPasswordWithoutEncryption, user.password)

    expect(userHasPasswordEncrypted).toBeTruthy()

  });
});
