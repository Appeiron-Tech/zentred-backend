import { IsMongoId, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'
import { ObjectId } from 'mongodb'

export class CreateCourseDto {
  @IsMongoId()
  @IsNotEmpty()
  centredId: ObjectId

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  title: string

  @IsString()
  @IsNotEmpty()
  @MinLength(32)
  description: string

  @IsString()
  @IsNotEmpty()
  category: string
}
