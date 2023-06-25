import { Module } from '@nestjs/common'
import { CentredService } from './centred.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Centred, CentredSchema } from './schemas/centred.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Centred.name, schema: CentredSchema }])],
  providers: [CentredService],
  exports: [CentredService, MongooseModule],
})
export class CentredModule {}
