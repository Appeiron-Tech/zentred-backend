export interface IReadUser {
  id: string
  centredId: string
  uid: string
  email: string
  displayName: string
  emailVerified: boolean
  isAnonymous: boolean
  phoneNumber: string
  photoURL: string
  createdAt: Date
  lastLoginAt: Date
  lastLogoutAt: Date
}
