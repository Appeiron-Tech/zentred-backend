import { IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator'

export class UpdateCourseDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  language?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  level?: string

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
  @MaxLength(3)
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
