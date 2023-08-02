import { ICentredApp } from './centredApp.interface'
import { IContact } from './centredContact.interface'
import { IReadSchool } from './readSchool.interface'

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
  schools: IReadSchool[]
  favicon: string
  currency: string
  apps: ICentredApp[]
  updatedAt: Date
  createdAt: Date
}
