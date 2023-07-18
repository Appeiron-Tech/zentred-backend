import { ObjectId } from 'mongoose'

export interface ISchool {
  _id?: ObjectId
  centredId: ObjectId
  name: string
  description: string
  address: string
  country: string
  type: string
  favicon: string
  currency: string
  updatedAt: Date
  createdAt: Date
}
