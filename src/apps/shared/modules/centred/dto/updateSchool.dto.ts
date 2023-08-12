import { IsArray, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator'
import { IContact, ISns } from '../interfaces/school.interface'

export class UpdateSchoolDto {
  @IsOptional()
  @IsString()
  address?: string

  @IsOptional()
  @IsString()
  summary?: string

  @IsOptional()
  @IsString()
  coverUrl?: string

  @IsOptional()
  @IsString()
  profileUrl?: string

  @IsOptional()
  @IsString()
  officialName?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  shortName?: string

  @IsOptional()
  @IsObject()
  contact?: IContact

  @IsOptional()
  @IsArray()
  sns?: ISns[]

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  country?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  type?: string

  @IsOptional()
  @IsString()
  favicon?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  currency?: string
}
