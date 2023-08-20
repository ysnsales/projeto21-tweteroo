import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/user.dto';
import { Tweet } from './entities/tweet.entity';
import { CreateTweetDto } from './dtos/tweet.dto';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor() {
    this.users = [];
    this.tweets = [];
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

  getTweets(page?: number){
    if (page < 1) throw new BadRequestException();
    if (page === undefined) page = 1;
    
    const startIndex = (page - 1) * 15;
    const endIndex = startIndex + 15;
    return this.tweets.slice(startIndex, endIndex);

  }

  createTweet(body: CreateTweetDto) {
    const user = this.users.find((user) => user.username === body.username)
    if (!user) throw new UnauthorizedException('UNAUTHORIZED');

    return this.tweets.push(new Tweet(body.username, user.avatar, body.tweet))

  }
}
