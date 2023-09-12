import { Injectable } from '@nestjs/common'
import { UserService as DBUserService } from 'src/infrastructure/database/user/user.service'
import { ICreateUser } from './dtos/createUser.dto'
import { IUpdateUser } from './dtos/updateUser.dto'

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

  async loginUser(userUid: string): Promise<any> {
    try {
      const toUpdateUser: IUpdateUser = {
        lastLoginAt: new Date(),
      }
      return await this.dbUserService.updateByUid(userUid, toUpdateUser)
    } catch (error) {
      throw error
    }
  }
}
