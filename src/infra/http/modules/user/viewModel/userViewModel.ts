import { User } from '@prisma/client';

export class UserViewModel {
  static toHttp({ created_at, email, id, name }: User) {
    return {
      id,
      email,
      name,
      created_at,
    };
  }
}
