import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class GetAllCoursesDto {
  @IsNotEmpty()
  centredId: string

  @IsString()
  @IsOptional()
  category: string
}
