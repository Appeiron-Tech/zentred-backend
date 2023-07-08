import { Injectable } from '@nestjs/common'
import { CourseService as DBCourseService } from '../../../infrastructure/database/course/course.service'
import { UpdateCourseDto } from './dto/updateCourse.dto'
import { CreateCourseDto } from './dto/createCourse.dto'
import { IReadCourse } from './dto/readCourse.dto'

@Injectable()
export class CourseService {
  constructor(private dbCourseService: DBCourseService) {}

  async getCourse(id: string): Promise<any> {
    try {
      return await this.dbCourseService.find({ _id: id })
    } catch (error) {
      throw error
    }
  }

  async getCourses(centredId: string): Promise<IReadCourse[]> {
    try {
      const courses = []
      const rawCourses = await this.dbCourseService.findAll({ centredId: centredId })
      rawCourses.forEach((course) => {
        courses.push({
          id: course._id,
          centredId: course.centredId,
          title: course.title,
          description: course.description,
          category: course.category,
          subCategory: course.subCategory,
          price: course.price,
          currency: course.currency,
          duration: course.duration,
          durationUnit: course.durationUnit,
          updatedAt: course.updatedAt,
          createdAt: course.createdAt,
        })
      })
      return courses
    } catch (error) {
      throw error
    }
  }

  async createCourse(course: CreateCourseDto): Promise<any> {
    try {
      return await this.dbCourseService.create(course)
    } catch (error) {
      throw error
    }
  }

  async updateCourse(id: string, course: UpdateCourseDto): Promise<any> {
    try {
      return await this.dbCourseService.update(id, course)
    } catch (error) {
      throw error
    }
  }
}
