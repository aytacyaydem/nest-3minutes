import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  findOneById(id: number) {
    return {
      id,
      firstName: 'John',
      lastName: 'Doe',
      posts: [],
    };
  }
}
