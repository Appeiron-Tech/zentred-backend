import { ICentredApp } from './centredApp.interface'
import { IReadSchool } from './readSchool.interface'

export interface IReadCentred {
  id: string
  tenancyName: string
  country: string
  type: string
  schools: IReadSchool[]
  currency: string
  apps: ICentredApp[]
  updatedAt: Date
  createdAt: Date
}
