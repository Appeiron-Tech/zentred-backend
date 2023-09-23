import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { ICourse } from '../interfaces/course.interface'
import { ObjectId } from 'mongodb'

export type CourseDocument = HydratedDocument<Course>

@Schema({ timestamps: true })
export class Course implements ICourse {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true, ref: 'Centred' })
  centredId: ObjectId

  @Prop({ type: String, maxLength: 32, required: true })
  title: string

  @Prop({ type: String, minLength: 32, maxLength: 520, required: true })
  description: string

  @Prop({ type: String, maxLength: 16, required: true })
  category: string

  @Prop({ type: String, maxLength: 3 })
  language: string

  @Prop({ type: String })
  level: string

  @Prop({ type: String, maxLength: 16 })
  subCategory: string

  @Prop({ type: String, maxLength: 3 })
  currency: string

  @Prop({ type: Number })
  price: number

  @Prop({ type: Boolean, default: false })
  isActive: boolean

  @Prop({ type: Number })
  duration: number

  @Prop({ type: String })
  durationUnit: string

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const CourseSchema = SchemaFactory.createForClass(Course)
