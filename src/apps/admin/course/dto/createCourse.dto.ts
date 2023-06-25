import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { ObjectId } from 'mongodb'

export class CreateCourseDto {
  @IsUUID()
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
