import { Injectable } from '@nestjs/common'
import { CentredService as DBCentredService } from '../../../../infrastructure/database/centred/centred.service'
import { UpdateCentredDto } from './dto/updateCentred.dto'

@Injectable()
export class CentredService {
  constructor(private dbCentredService: DBCentredService) {}

  async getCentred(id: string): Promise<any> {
    try {
      return await this.dbCentredService.find({ _id: id })
    } catch (error) {
      throw error
    }
  }

  async createCentred(centred: any): Promise<any> {
    try {
      return await this.dbCentredService.create(centred)
    } catch (error) {
      throw error
    }
  }

  async updateCentred(id: string, centred: UpdateCentredDto): Promise<any> {
    try {
      return await this.dbCentredService.update(id, centred)
    } catch (error) {
      throw error
    }
  }

  async createSchool(school: any): Promise<any> {
    try {
      return await this.dbCentredService.createSchool(school)
    } catch (error) {
      throw error
    }
  }
}
