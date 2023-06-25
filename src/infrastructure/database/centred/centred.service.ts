import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Centred, CentredDocument } from './schemas/centred.schema'
import { FilterQuery, Model } from 'mongoose'
import { ICentred } from './interfaces/centred.interface'

@Injectable()
export class CentredService {
  constructor(@InjectModel(Centred.name) private centredModel: Model<CentredDocument>) {}

  async find(centredQuery: FilterQuery<Centred>): Promise<any> {
    return await this.centredModel.findOne(centredQuery).exec()
  }

  async findAll(centredQuery: FilterQuery<Centred>): Promise<any> {
    return await this.centredModel.find(centredQuery).exec()
  }

  async create(centred: Partial<ICentred>): Promise<ICentred> {
    return await this.centredModel.create(centred)
  }
}
