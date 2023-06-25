import { Module } from '@nestjs/common'
import { CourseService } from './course.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Course, CourseSchema } from './schemas/course.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }])],
  providers: [CourseService],
  exports: [CourseService, MongooseModule],
})
export class CourseModule {}
