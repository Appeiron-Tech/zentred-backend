import { Schema } from 'mongoose'
import { ICentredApp } from './centredApp.interface'

export interface ICentred {
  _id?: Schema.Types.ObjectId
  tenancyName: string
  country: string
  type: string
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
  tenancyName?: string
  country?: string
  type?: string
  currency?: string
  ga_email_analytics?: string
  ga_view_id?: string
  ga_api_key?: string
  apps?: ICentredApp[]
  schools?: any[]
}
