import { User } from 'src/modules/user/entities/user';
import { User as UserRaw } from '@prisma/client';
export class PrismaUserMapper {
  static toPrisma({created_at, email, password, name, id}: User): UserRaw {
    return {
        created_at,
        email,
        password,
        name,
        id,
    };
  }
}
