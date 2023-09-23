export interface IReadCourse {
  id: string
  centredId: string
  title: string
  description: string
  category: string
  subCategory?: string
  price?: number
  isActive: boolean
  currency?: string
  language?: string
  level?: string
  duration?: number
  durationUnit?: string
  updatedAt: Date
  createdAt: Date
}
