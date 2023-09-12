import { Injectable } from '@nestjs/common'
import { CentredService as DBCentredService } from '../../../../infrastructure/database/centred/centred.service'
import { UpdateCentredDto } from './dto/updateCentred.dto'
import { Centred } from './centred.class'
import { School } from './school.class'
import { UpdateSchoolDto } from './dto/updateSchool.dto'

@Injectable()
export class CentredService {
  constructor(private dbCentredService: DBCentredService) {}

  async getCentred(id: string): Promise<any> {
    try {
      const dbCentred = await this.dbCentredService.find({ _id: id })
      const centred = new Centred(dbCentred)
      return centred.parseToRead()
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
      const dbUpdatedCentred = await this.dbCentredService.update(id, centred)
      const updateCentred = new Centred(dbUpdatedCentred)
      return updateCentred.parseToRead()
    } catch (error) {
      throw error
    }
  }

  async updateSchool(id: string, school: UpdateSchoolDto): Promise<any> {
    try {
      const dbUpdatedSchool = await this.dbCentredService.updateSchool(id, school)
      const updateSchool = new School(dbUpdatedSchool)
      return updateSchool.parseToRead()
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
