export class ReadCourseDto {
  id: string
  centredId: string
  title: string
  description: string
  category: string
  subCategory?: string
  price: number
  currency: string
  duration?: number
  durationUnit?: string
  updatedAt: Date
  createdAt: Date
}
