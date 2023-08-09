import { Injectable } from '@nestjs/common'
import { CentredService as DBCentredService } from '../../../../infrastructure/database/centred/centred.service'
import { UpdateCentredDto } from './dto/updateCentred.dto'
import { Centred } from './centred.class'

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
      console.log('to update')
      console.log(centred)
      // const dbUpdatedCentred = await this.dbCentredService.update(id, centred)
      // const updateCentred = new Centred(dbUpdatedCentred)
      const dbCentred = await this.dbCentredService.find({ _id: id })
      const updateCentred = new Centred(dbCentred)
      return updateCentred.parseToRead()
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
