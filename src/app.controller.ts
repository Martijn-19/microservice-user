import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserDTO } from './User/dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'getAllUsers' })
  async GetAllUsers(): Promise<UserDTO[]> {
    console.log('getAllUsers message received');
    return this.appService.getAllUsers();
  }

  @MessagePattern({ cmd: 'createUser' })
  async createBlog(@Body() data: UserDTO): Promise<UserDTO> {
    console.log(data);
    console.log('create User message received');
    return this.appService.createUser(data);
  }
}
