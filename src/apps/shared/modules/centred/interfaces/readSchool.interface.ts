import { IContact } from './centredContact.interface'

export interface IReadSchool {
  id: string
  centredId: string
  name: string
  description: string
  address: string
  contact: IContact
  country: string
  type: string
  favicon: string
  currency: string
  updatedAt: Date
  createdAt: Date
}
