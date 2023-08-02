import { IContact } from './interfaces/centredContact.interface'
import { ObjectId } from 'mongodb'
import { IReadSchool } from './interfaces/readSchool.interface'

export interface ISchoolDB {
  _id: ObjectId
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

export class School implements ISchoolDB {
  id?: string
  _id: ObjectId
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

  constructor(dbSchool: ISchoolDB) {
    this._id = dbSchool._id
    this.id = String(dbSchool._id)
    this.centredId = dbSchool.centredId
    this.name = dbSchool.name
    this.description = dbSchool.description
    this.address = dbSchool.address
    this.contact = dbSchool.contact
    this.country = dbSchool.country
    this.type = dbSchool.type
    this.favicon = dbSchool.favicon
    this.currency = dbSchool.currency
    this.updatedAt = dbSchool.updatedAt
    this.createdAt = dbSchool.createdAt
  }

  public parseToRead(): IReadSchool {
    return {
      id: this.id,
      centredId: String(this.centredId),
      name: this.name,
      description: this.description,
      address: this.address,
      contact: this.contact,
      country: this.country,
      type: this.type,
      favicon: this.favicon,
      currency: this.currency,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    }
  }
}
