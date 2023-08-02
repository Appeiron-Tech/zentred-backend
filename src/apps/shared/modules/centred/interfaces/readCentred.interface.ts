import { ICentredApp } from './centredApp.interface'
import { IContact } from './centredContact.interface'

export interface IReadCentred {
  id: string
  tenancyName: string
  summary: string
  coverUrl: string
  profileUrl: string
  officialName: string
  shortName: string
  country: string
  contact: IContact
  type: string
  favicon: string
  currency: string
  apps: ICentredApp[]
  updatedAt: Date
  createdAt: Date
}
