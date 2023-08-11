import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateCentredDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  tenancyName?: string

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
  @IsNotEmpty()
  currency?: string
}
