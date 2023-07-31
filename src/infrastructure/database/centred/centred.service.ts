import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Centred, CentredDocument } from './centred/schemas/centred.schema'
import { FilterQuery, Model } from 'mongoose'
import { ICentred, IUpdateCentred } from './centred/interfaces/centred.interface'
import { ISchool } from './school/interfaces/school.interface'
import { School, SchoolDocument } from './school/schemas/school.schema'
import { ObjectId } from 'mongodb'

@Injectable()
export class CentredService {
  constructor(
    @InjectModel(Centred.name) private centredModel: Model<CentredDocument>,
    @InjectModel(School.name) private schoolModel: Model<SchoolDocument>,
  ) {}

  async find(centredQuery: FilterQuery<Centred>): Promise<any> {
    return await this.centredModel
      .findOne(centredQuery)
      .populate({ path: 'schools', model: 'School' })
      .exec()
    // return await this.productModel
    // .find(productQuery)
    // .populate({ path: 'productVariations', model: 'ProductVariation' })
    // .populate({ path: 'categories', model: 'Category' })
    // .exec()
  }

  async findAll(centredQuery: FilterQuery<Centred>): Promise<any> {
    return await this.centredModel.find(centredQuery).exec()
  }

  async create(centred: Partial<ICentred>): Promise<ICentred> {
    return await this.centredModel.create(centred)
  }

  async createSchool(school: Partial<ISchool>): Promise<ISchool> {
    return await this.schoolModel.create(school)
  }

  async update(id: string, centred: IUpdateCentred): Promise<any> {
    const _id = new ObjectId(id)
    return await this.centredModel.findOneAndUpdate({ _id }, centred, { new: true })
  }
}
