import { Schema } from 'mongoose'
import { ICentredApp } from './centredApp.interface'
import { IContact } from './contact.interface'

export interface ICentred {
  _id?: Schema.Types.ObjectId
  tenancyName: string
  summary: string
  coverUrl: string
  profileUrl: string
  officialName: string
  shortName: string
  contact: IContact
  country: string
  type: string
  favicon: string
  currency: string
  ga_email_analytics: string
  ga_view_id: string
  ga_api_key: string
  apps: ICentredApp[]
  schools: any[]
  updatedAt: Date
  createdAt: Date
}

export interface IUpdateCentred {
  title?: string
  language?: string
  level?: string
  description?: string
  category?: string
  subCategory?: string
  currency?: string
  price?: number
  duration?: number
  durationUnit?: string
}
