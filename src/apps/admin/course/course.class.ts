import { ObjectId } from 'mongodb'
import { IReadCourse } from './dto/readCourse.dto'

export interface ICourseDB {
  _id?: ObjectId
  centredId: ObjectId
  title: string
  description: string
  language: string
  level: string
  category: string
  subCategory?: string
  price: number
  isActive: boolean
  currency: string
  duration?: number
  durationUnit?: string
  updatedAt: Date
  createdAt: Date
}

export class Course {
  _id?: ObjectId
  id: string
  centredId: ObjectId
  title: string
  description: string
  category: string
  subCategory?: string
  price: number
  language: string
  level: string
  isActive: boolean
  currency: string
  duration?: number
  durationUnit?: string
  updatedAt: Date
  createdAt: Date

  constructor(courseDB: ICourseDB) {
    this._id = courseDB._id
    this.id = String(courseDB._id)
    this.centredId = courseDB.centredId
    this.title = courseDB.title
    this.description = courseDB.description
    this.category = courseDB.category
    this.subCategory = courseDB.subCategory
    this.price = courseDB.price
    this.language = courseDB.language
    this.level = courseDB.level
    this.isActive = courseDB.isActive
    this.currency = courseDB.currency
    this.duration = courseDB.duration
    this.durationUnit = courseDB.durationUnit
    this.updatedAt = courseDB.updatedAt
    this.createdAt = courseDB.createdAt
  }

  public parseToRead(): IReadCourse {
    return {
      id: this.id,
      centredId: String(this.centredId),
      title: this.title,
      description: this.description,
      category: this.category,
      subCategory: this.subCategory,
      price: this.price,
      isActive: this.isActive,
      language: this.language,
      level: this.level,
      currency: this.currency,
      duration: this.duration,
      durationUnit: this.durationUnit,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    }
  }
}
