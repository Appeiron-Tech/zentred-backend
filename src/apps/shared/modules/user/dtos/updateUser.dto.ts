import { IsBoolean, IsDateString, IsOptional, IsString, IsUrl, MaxLength } from 'class-validator'

export class UpdateUserDto implements IUpdateUser {
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

  @IsOptional()
  @IsDateString()
  lastLoginAt: Date

  @IsOptional()
  @IsDateString()
  lastLogoutAt: Date
}

export interface IUpdateUser {
  displayName?: string
  emailVerified?: boolean
  isAnonymous?: boolean
  phoneNumber?: string
  photoURL?: string
  lastLoginAt?: Date
  lastLogoutAt?: Date
}
