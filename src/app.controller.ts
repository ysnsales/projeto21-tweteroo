import { Body, Controller, Get, HttpCode, HttpException, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('/sign-up')
  @HttpCode(200)
  createUser(@Body() body: CreateUserDto) {
    return this.appService.createUser(body);  
} 
}
