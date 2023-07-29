import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateCentredDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  tenancyName?: string

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
