import { Module } from '@nestjs/common'
import { CourseController } from './course.controller'
import { CourseService } from './course.service'
import { CourseModule as DBCourseModule } from '../../../infrastructure/database/course/course.module'
import { CourseService as DBCourseService } from '../../../infrastructure/database/course/course.service'

@Module({
  imports: [DBCourseModule],
  providers: [CourseService, DBCourseService],
  controllers: [CourseController],
})
export class CourseModule {}
