import { ObjectId } from 'mongodb'
import { ICentredApp } from './interfaces/centredApp.interface'
import { IReadCentred } from './interfaces/readCentred.interface'
import { ISchoolDB, School } from './school.class'

export interface ICentredDB {
  _id?: ObjectId
  tenancyName: string
  country: string
  type: string
  favicon: string
  currency: string
  ga_email_analytics: string
  ga_view_id: string
  ga_api_key: string
  apps: ICentredApp[]
  schools: ISchoolDB[]
  updatedAt: Date
  createdAt: Date
}

export class Centred {
  _id?: ObjectId
  id: string
  tenancyName: string
  country: string
  type: string
  currency: string
  ga_email_analytics: string
  ga_view_id: string
  ga_api_key: string
  apps: ICentredApp[]
  schools: ISchoolDB[]
  updatedAt: Date
  createdAt: Date

  constructor(dbCentred: ICentredDB) {
    this._id = dbCentred._id
    this.id = String(dbCentred._id)
    this.tenancyName = dbCentred.tenancyName
    this.country = dbCentred.country
    this.type = dbCentred.type
    this.currency = dbCentred.currency
    this.ga_email_analytics = dbCentred.ga_email_analytics
    this.ga_view_id = dbCentred.ga_view_id
    this.ga_api_key = dbCentred.ga_api_key
    this.apps = dbCentred.apps
    this.schools = dbCentred.schools
    this.updatedAt = dbCentred.updatedAt
    this.createdAt = dbCentred.createdAt
  }

  public parseToRead(): IReadCentred {
    const readSchools = this.schools?.map((dbSchool) => new School(dbSchool).parseToRead()) ?? []
    return {
      id: this.id,
      tenancyName: this.tenancyName,
      country: this.currency,
      type: this.type,
      schools: readSchools,
      currency: this.currency,
      apps: this.apps,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    }
  }
}
