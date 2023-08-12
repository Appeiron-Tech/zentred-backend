import { IContact, ISns } from './interfaces/school.interface'
import { ObjectId } from 'mongodb'
import { IReadSchool } from './interfaces/readSchool.interface'

export interface ISchoolDB {
  _id: ObjectId
  centredId: ObjectId
  address: string
  summary: string
  coverUrl: string
  profileUrl: string
  officialName: string
  shortName: string
  contact: IContact
  sns: ISns[]
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
  summary: string
  coverUrl: string
  profileUrl: string
  officialName: string
  shortName: string
  description: string
  address: string
  contact: IContact
  sns: ISns[]
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
    this.shortName = dbSchool.shortName
    this.address = dbSchool.address
    this.contact = dbSchool.contact
    this.sns = dbSchool.sns
    this.summary = dbSchool.summary
    this.coverUrl = dbSchool.coverUrl
    this.profileUrl = dbSchool.profileUrl
    this.officialName = dbSchool.officialName
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
      address: this.address,
      contact: this.contact,
      country: this.country,
      type: this.type,
      sns: this.sns,
      summary: this.summary,
      coverUrl: this.coverUrl,
      profileUrl: this.profileUrl,
      officialName: this.officialName,
      shortName: this.shortName,
      favicon: this.favicon,
      currency: this.currency,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    }
  }

  public static test(): void {
    console.log('from test')
  }
}
