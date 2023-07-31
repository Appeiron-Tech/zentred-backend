import { ObjectId } from 'mongoose'
import { IContact } from '../../centred/interfaces/contact.interface'

export interface ISchool {
  _id?: ObjectId
  centredId: ObjectId
  name: string
  description: string
  address: string
  contact: IContact
  country: string
  type: string
  favicon: string
  currency: string
  updatedAt: Date
  createdAt: Date
}
