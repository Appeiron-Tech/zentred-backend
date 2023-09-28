import { Controller, Get, Post, Param, Patch, Body, UseInterceptors, Query } from '@nestjs/common'
import { CourseService } from './course.service'
import { CreateCourseDto } from './dto/createCourse.dto'
import { UpdateCourseDto } from './dto/updateCourse.dto'
import { IReadCourse } from './dto/readCourse.dto'
import { Course } from './course.class'
import { LoggerInterceptor } from 'src/apps/shared/interceptors/app-logger.interceptor'
import { GetAllCoursesDto } from './dto/getAllCourses.dto'

@UseInterceptors(LoggerInterceptor)
@Controller('admin/course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get('/')
  async getAllCourses(@Query() query: GetAllCoursesDto): Promise<IReadCourse[]> {
    try {
      const courses = await this.courseService.getCourses(query.centredId)
      return courses
    } catch (e) {
      console.error(e)
    }
  }

  @Get('/:id')
  async getCourse(@Param('id') courseId: string): Promise<IReadCourse> {
    try {
      const dbCourse = await this.courseService.getCourse(courseId)
      if (dbCourse) {
        const course = new Course(dbCourse)
        return course.parseToRead()
      } else {
        throw new Error('There is not a course for that ID')
      }
    } catch (e) {
      console.error(e)
    }
  }

  @Post('/')
  async createCourse(@Body() course: CreateCourseDto): Promise<any> {
    try {
      const dbCentred = await this.courseService.createCourse(course)
      const newCourse = new Course(dbCentred)
      return newCourse.parseToRead()
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  @Patch('/:id')
  async updateCourse(
    @Param('id') courseId: string,
    @Body() course: UpdateCourseDto,
  ): Promise<IReadCourse> {
    try {
      const dbUpdatedCourse = await this.courseService.updateCourse(courseId, course)
      const updateCourse = new Course(dbUpdatedCourse)
      return updateCourse.parseToRead()
    } catch (e) {
      console.error(e)
    }
  }
}
