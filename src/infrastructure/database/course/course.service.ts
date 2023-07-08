import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ObjectId } from 'mongodb'
import { Course, CourseDocument } from './schemas/course.schema'
import { FilterQuery, Model } from 'mongoose'
import { ICourse } from './interfaces/course.interface'
import { UpdateCourseDto } from './dto/updateCourse.dto'

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) {}

  async find(courseQuery: FilterQuery<Course>): Promise<any> {
    return await this.courseModel.findOne(courseQuery).exec()
  }

  async findAll(courseQuery: FilterQuery<Course>): Promise<any[]> {
    return await this.courseModel.find(courseQuery).exec()
  }

  async create(course: Partial<ICourse>): Promise<ICourse> {
    return await this.courseModel.create(course)
  }

  async update(id: string, course: UpdateCourseDto): Promise<ICourse> {
    const _id = new ObjectId(id)
    return await this.courseModel.findOneAndUpdate({ _id }, course, { new: true })
  }
}
