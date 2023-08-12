import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema, ObjectId } from 'mongoose'
import { ISchool, ISns } from '../interfaces/school.interface'
import { IContact } from '../../centred/interfaces/contact.interface'

export type SchoolDocument = HydratedDocument<School>

@Schema({ timestamps: true })
export class School implements ISchool {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true, ref: 'Centred' })
  centredId: ObjectId

  @Prop({ type: String, maxLength: 128 })
  shortName: string

  @Prop({ type: String, maxLength: 512 })
  summary: string

  @Prop({ type: String, maxLength: 128 })
  officialName: string

  @Prop({ type: String })
  coverUrl: string

  @Prop({ type: MongooseSchema.Types.Mixed })
  sns: ISns[]

  @Prop({ type: String, maxLength: 512 })
  favicon: string

  @Prop({ type: String })
  profileUrl: string

  @Prop({ type: String, maxLength: 256 })
  address: string

  @Prop({ type: String, maxLength: 3 })
  country: string

  @Prop({ type: MongooseSchema.Types.Mixed })
  contact: IContact

  @Prop({ type: String, maxLength: 16, required: true })
  type: string

  @Prop({ type: String, maxLength: 3 })
  currency: string

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const SchoolSchema = SchemaFactory.createForClass(School)
