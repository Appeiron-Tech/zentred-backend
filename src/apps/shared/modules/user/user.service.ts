import { Injectable } from '@nestjs/common'
import { UserService as DBUserService } from 'src/infrastructure/database/user/user.service'
import { ICreateUser } from './dtos/createUser.dto'

@Injectable()
export class UserService {
  constructor(private dbUserService: DBUserService) {}

  async createUser(user: ICreateUser): Promise<any> {
    try {
      return await this.dbUserService.create(user)
    } catch (error) {
      throw error
    }
  }
}
