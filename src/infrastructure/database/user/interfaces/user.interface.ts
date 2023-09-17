import { ObjectId } from 'mongodb'

export interface IUser {
  _id?: ObjectId
  centredId: ObjectId
  uid: string
  email: string
  displayName: string | null
  emailVerified: boolean
  isAnonymous: boolean
  phoneNumber: string | null
  photoURL: string | null
  createdAt: Date
  lastLoginAt: Date
  lastLogoutAt: Date
}

export interface IUserCreate {
  centredId: ObjectId
  uid: string
  email: string
  displayName: string | null
  emailVerified: boolean
  isAnonymous: boolean
  phoneNumber: string | null
  photoURL: string | null
}

export interface IUserUpdate {
  displayName?: string
  emailVerified?: boolean
  isAnonymous?: boolean
  phoneNumber?: string
  photoURL?: string
  lastLoginAt?: Date
  lastLogoutAt?: Date
}
