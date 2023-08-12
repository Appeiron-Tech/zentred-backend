import { IContact, ISns } from './school.interface'

export interface IReadSchool {
  id: string
  centredId: string
  address: string
  contact: IContact
  sns: ISns[]
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
