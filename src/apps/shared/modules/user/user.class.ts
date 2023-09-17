import { ObjectId } from 'mongodb'
import { IReadUser as IUserRead } from './dtos/readUser.interface'

export interface IUserDB {
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

export class User {
  _id?: ObjectId
  id: string
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
  constructor(dbUser: IUserDB) {
    this._id = dbUser._id
    this.id = String(dbUser._id)
    this.centredId = dbUser.centredId
    this.uid = dbUser.uid
    this.email = dbUser.email
    this.displayName = dbUser.displayName
    this.emailVerified = dbUser.emailVerified
    this.isAnonymous = dbUser.isAnonymous
    this.phoneNumber = dbUser.phoneNumber
    this.photoURL = dbUser.photoURL
    this.createdAt = dbUser.createdAt
    this.lastLoginAt = dbUser.lastLoginAt
    this.lastLogoutAt = dbUser.lastLogoutAt
  }

  public parseToRead(): IUserRead {
    return {
      id: this.id,
      centredId: String(this.centredId),
      uid: this.uid,
      email: this.email,
      displayName: this.displayName,
      emailVerified: this.emailVerified,
      isAnonymous: this.isAnonymous,
      phoneNumber: this.phoneNumber,
      photoURL: this.photoURL,
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt,
      lastLogoutAt: this.lastLogoutAt,
    }
  }
}
