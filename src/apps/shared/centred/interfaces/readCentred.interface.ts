import { Schema } from 'mongoose'
import { ICentredApp } from './centreApp.interface'

export interface IReadCentred {
  _id?: Schema.Types.ObjectId
  tenancyName: string
  officialName: string
  country: string
  type: string
  favicon: string
  currencyName: string
  apps: ICentredApp[]
  updatedAt: Date
  createdAt: Date
}
