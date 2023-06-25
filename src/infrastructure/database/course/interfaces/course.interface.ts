import { Schema } from 'mongoose'
import { ObjectId } from 'mongodb'

export interface ICourse {
  _id?: Schema.Types.ObjectId
  centredId: ObjectId
  title: string
  description: string
  category: string
  subCategory?: string
  price: number
  currency: string
  duration?: number
  durationUnit?: string
  updatedAt: Date
  createdAt: Date
}
