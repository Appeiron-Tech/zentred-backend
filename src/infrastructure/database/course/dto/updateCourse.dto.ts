import { IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateCourseDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  category?: string

  @IsOptional()
  @IsString()
  subCategory?: string

  @IsOptional()
  @IsString()
  currency?: string

  @IsOptional()
  @IsDecimal()
  price?: number

  @IsOptional()
  @IsNumber()
  duration?: number

  @IsOptional()
  @IsString()
  durationUnit?: string
}
