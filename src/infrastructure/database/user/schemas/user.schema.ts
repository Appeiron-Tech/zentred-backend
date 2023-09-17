import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { ObjectId } from 'mongodb'
import { IUser } from '../interfaces/user.interface'

export type UserDocument = HydratedDocument<User>

@Schema({ timestamps: true })
export class User implements IUser {
  _id: ObjectId

  @Prop({ type: String, required: true, unique: true })
  uid: string

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true, ref: 'Centred' })
  centredId: ObjectId

  @Prop({ type: String, required: true, maxLength: 128 })
  email: string

  @Prop({ type: String, maxLength: 128 })
  displayName: string

  @Prop({ type: Boolean, default: false })
  emailVerified: boolean

  @Prop({ type: Boolean, default: false })
  isAnonymous: boolean

  @Prop({ type: String, maxLength: 64 })
  phoneNumber: string

  @Prop({ type: String })
  photoURL: string

  @Prop({ type: Date })
  lastLoginAt: Date

  @Prop({ type: Date })
  lastLogoutAt: Date

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
