import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './schemas/user.schema'
import { Model } from 'mongoose'
import { IUser, IUserCreate } from './interfaces/user.interface'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: IUserCreate): Promise<IUser> {
    return await this.userModel.create(user)
  }
}
