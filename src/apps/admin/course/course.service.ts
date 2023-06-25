import { Injectable } from '@nestjs/common'
import { CourseService as DBCourseService } from '../../../infrastructure/database/course/course.service'
import { UpdateCourseDto } from './dto/updateCourse.dto'
import { CreateCourseDto } from './dto/createCourse.dto'

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

  async getCourses(centredId: string): Promise<any> {
    try {
      return await this.dbCourseService.findAll({ centredId: centredId })
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
