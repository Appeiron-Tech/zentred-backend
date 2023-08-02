import { ObjectId } from 'mongodb'
import { ICentredApp } from './interfaces/centredApp.interface'
import { IReadCentred } from './interfaces/readCentred.interface'
import { IContact } from './interfaces/centredContact.interface'

export interface ICentredDB {
  _id?: ObjectId
  tenancyName: string
  summary: string
  coverUrl: string
  profileUrl: string
  officialName: string
  shortName: string
  country: string
  type: string
  favicon: string
  contact: IContact
  currency: string
  ga_email_analytics: string
  ga_view_id: string
  ga_api_key: string
  apps: ICentredApp[]
  schools: any[]
  updatedAt: Date
  createdAt: Date
}

export class Centred {
  _id?: ObjectId
  id: string
  tenancyName: string
  summary: string
  coverUrl: string
  profileUrl: string
  officialName: string
  shortName: string
  country: string
  type: string
  favicon: string
  currency: string
  contact: IContact
  ga_email_analytics: string
  ga_view_id: string
  ga_api_key: string
  apps: ICentredApp[]
  schools: any[]
  updatedAt: Date
  createdAt: Date

  constructor(dbCentred: ICentredDB) {
    this._id = dbCentred._id
    this.id = String(dbCentred._id)
    this.tenancyName = dbCentred.tenancyName
    this.summary = dbCentred.summary
    this.coverUrl = dbCentred.coverUrl
    this.profileUrl = dbCentred.profileUrl
    this.officialName = dbCentred.officialName
    this.shortName = dbCentred.shortName
    this.country = dbCentred.country
    this.type = dbCentred.type
    this.contact = dbCentred.contact
    this.favicon = dbCentred.favicon
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
    return {
      id: this.id,
      tenancyName: this.tenancyName,
      summary: this.summary,
      coverUrl: this.coverUrl,
      profileUrl: this.profileUrl,
      officialName: this.officialName,
      shortName: this.shortName,
      country: this.currency,
      type: this.type,
      contact: this.contact,
      favicon: this.favicon,
      currency: this.currency,
      apps: this.apps,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    }
  }
}
