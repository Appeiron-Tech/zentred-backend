import { Controller, Get, Post, Param, Patch, Body } from '@nestjs/common'
import { CourseService } from './course.service'
import { CreateCourseDto } from './dto/createCourse.dto'
import { UpdateCourseDto } from './dto/updateCourse.dto'
import { IReadCourse } from './dto/readCourse.dto'

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
  async getCourse(@Param('id') courseId: string): Promise<any> {
    try {
      const course = await this.courseService.getCourse(courseId)
      return course
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
  async updateCourse(@Param('id') courseId: string, @Body() course: UpdateCourseDto): Promise<any> {
    try {
      const updatedCourse = await this.courseService.updateCourse(courseId, course)
      return updatedCourse
    } catch (e) {
      console.error(e)
    }
  }
}
