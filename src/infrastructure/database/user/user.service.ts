import { IUser, IUserCreate, IUserUpdate } from './interfaces/user.interface'
import { User, UserDocument } from './schemas/user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { ObjectId } from 'mongodb'
import { Model } from 'mongoose'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: IUserCreate): Promise<IUser> {
    return await this.userModel.create(user)
  }

  async update(id: string, user: IUserUpdate): Promise<IUser> {
    const _id = new ObjectId(id)
    return await this.userModel.findOneAndUpdate({ _id }, user, { new: true })
  }

  async updateByUid(uid: string, user: IUserUpdate): Promise<IUser> {
    return await this.userModel.findOneAndUpdate({ uid }, user, { new: true })
  }
}
