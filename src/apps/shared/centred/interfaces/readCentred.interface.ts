import { ICentredApp } from './centredApp.interface'

export interface IReadCentred {
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
  apps: ICentredApp[]
  updatedAt: Date
  createdAt: Date
}
