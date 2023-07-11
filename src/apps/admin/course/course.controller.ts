import { Controller, Get, Post, Param, Patch, Body } from '@nestjs/common'
import { CourseService } from './course.service'
import { CreateCourseDto } from './dto/createCourse.dto'
import { UpdateCourseDto } from './dto/updateCourse.dto'
import { IReadCourse } from './dto/readCourse.dto'
import { Course } from './course.class'

@Controller('admin/course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get('/')
  async getAllCourses(): Promise<IReadCourse[]> {
    try {
      const centredId = '6498a94e213a7fc800781e1a'
      const courses = await this.courseService.getCourses(centredId)
      return courses
    } catch (e) {
      console.error(e)
    }
  }

  @Get('/:id')
  async getCourse(@Param('id') courseId: string): Promise<IReadCourse> {
    try {
      const dbCourse = await this.courseService.getCourse(courseId)
      const course = new Course(dbCourse)
      return course.parseToRead()
    } catch (e) {
      console.error(e)
    }
  }

  @Post('/')
  async createCourse(@Body() company: CreateCourseDto): Promise<any> {
    try {
      const centred = await this.courseService.createCourse(company)
      return centred
    } catch (e) {
      console.error(e)
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
