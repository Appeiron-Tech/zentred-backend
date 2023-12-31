import { ObjectId } from 'mongoose'
import { IContact } from '../../centred/interfaces/contact.interface'

export interface ISchool {
  _id?: ObjectId
  centredId: ObjectId
  shortName: string
  summary: string
  coverUrl: string
  profileUrl: string
  contact: IContact
  sns: ISns[]
  officialName: string
  address: string
  country: string
  type: string
  favicon: string
  updatedAt: Date
  createdAt: Date
}

export interface IUpdateSchool {
  shortName?: string
  summary?: string
  coverUrl?: string
  profileUrl?: string
  contact?: IContact
  officialName?: string
  address?: string
  country?: string
  type?: string
  favicon?: string
}

export interface ISns {
  code: string
  url: string
  show: boolean
}
