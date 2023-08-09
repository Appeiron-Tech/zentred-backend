import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { ICentred } from '../interfaces/centred.interface'
import { ICentredApp } from '../interfaces/centredApp.interface'

export type CentredDocument = HydratedDocument<Centred>

@Schema({ timestamps: true })
export class Centred implements ICentred {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ type: String, maxLength: 32, required: true, unique: true })
  tenancyName: string

  @Prop({ type: String, maxLength: 3 })
  country: string

  @Prop({ type: String, maxLength: 16, required: true })
  type: string

  @Prop({ type: String, maxLength: 3 })
  currency: string

  @Prop({ type: String })
  ga_email_analytics: string

  @Prop({ type: String })
  ga_view_id: string

  @Prop({ type: String })
  ga_api_key: string

  @Prop({ type: [{ type: MongooseSchema.Types.Mixed }] })
  apps: ICentredApp[]

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'School' }] })
  schools: MongooseSchema.Types.ObjectId[]

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const CentredSchema = SchemaFactory.createForClass(Centred)
