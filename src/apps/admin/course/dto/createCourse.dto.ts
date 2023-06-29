import { IsMongoId, IsNotEmpty, IsString } from 'class-validator'
import { ObjectId } from 'mongodb'

export class CreateCourseDto {
  @IsMongoId()
  @IsNotEmpty()
  centredId: ObjectId

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsString()
  @IsNotEmpty()
  category: string
}
