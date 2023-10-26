import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserDTO } from './User/dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'GetAllUsers' })
  async GetAllUsers(): Promise<UserDTO[]> {
    console.log('getAllUsers message received');
    return this.appService.GetAllUsers();
  }

  @MessagePattern({ cmd: 'Create User' })
  async createBlog(@Body() data: UserDTO): Promise<UserDTO> {
    console.log(data);
    console.log('create User message received');
    return this.appService.CreateUser(data);
  }
}
