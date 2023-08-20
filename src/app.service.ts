import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/user.dto';

@Injectable()
export class AppService {
  private users: User[];

  constructor() {
    this.users = [];
  }

  getHealth(): string {
    return "I'm okay!";
  }

  getUsers() {
    return this.users;
  }

  createUser(body: CreateUserDto) {
    return this.users.push(new User(body.username, body.avatar))

  }
}
