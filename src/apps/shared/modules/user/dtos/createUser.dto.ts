import {
  IsBoolean,
  IsDateString,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator'
import { ObjectId } from 'mongodb'

export class CreateUserDto implements ICreateUser {
  @IsNotEmpty()
  @IsString()
  uid: string

  @IsNotEmpty()
  @IsMongoId()
  centredId: ObjectId

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  email: string

  @IsOptional()
  @IsString()
  @MaxLength(128)
  displayName: string

  @IsOptional()
  @IsBoolean()
  emailVerified: boolean

  @IsOptional()
  @IsBoolean()
  isAnonymous: boolean

  @IsOptional()
  @IsString()
  phoneNumber: string

  @IsOptional()
  @IsUrl()
  photoURL: string

  @IsNotEmpty()
  @IsDateString()
  lastLoginAt: Date
}

export interface ICreateUser {
  uid: string
  centredId: ObjectId
  email: string
  displayName: string
  emailVerified: boolean
  isAnonymous: boolean
  phoneNumber: string
  photoURL: string
  lastLoginAt: Date
}
