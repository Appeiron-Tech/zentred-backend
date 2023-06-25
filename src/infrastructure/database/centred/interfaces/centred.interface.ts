import { Schema } from 'mongoose'
import { ICentredApp } from './centredApp.interface'

export interface ICentred {
  _id?: Schema.Types.ObjectId
  tenancyName: string
  officialName: string
  country: string
  type: string
  favicon: string
  currencyName: string
  ga_email_analytics: string
  ga_view_id: string
  ga_api_key: string
  apps: ICentredApp[]
  updatedAt: Date
  createdAt: Date
}
