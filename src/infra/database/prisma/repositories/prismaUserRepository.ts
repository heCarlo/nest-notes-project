import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { PrismaService } from './prisma.service';
import { User } from 'src/modules/user/entities/user';
import { PrismaUserMapper } from '../mappers/prismaUserMapper';

export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const userRaw = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.create({
      data: userRaw,
    });
  }
}
