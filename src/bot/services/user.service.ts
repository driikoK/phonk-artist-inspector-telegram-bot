import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userTemplate: User) {
    try {
      const user = await this.userRepository.create(userTemplate);
      return await this.userRepository.save(user);
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOne(telegram_id: string) {
    try {
      return await this.userRepository.findOne({
        where: { telegram_id: telegram_id },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (e) {
      throw new Error(e);
    }
  }
}
