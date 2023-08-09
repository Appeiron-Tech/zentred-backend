import { IContact } from './centredContact.interface'

export interface IReadSchool {
  id: string
  centredId: string
  name: string
  description: string
  address: string
  contact: IContact
  summary: string
  coverUrl: string
  profileUrl: string
  officialName: string
  shortName: string
  favicon: string
  country: string
  type: string
  currency: string
  updatedAt: Date
  createdAt: Date
}
