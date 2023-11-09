import { Injectable } from '@nestjs/common';

import { UserDTO } from './user/dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<UserDTO[]> {
    return await this.userRepository.find();
  }

  async createUser(data: UserDTO): Promise<any> {
    return this.userRepository.save(data);
  }
}