import { Module } from '@nestjs/common'
import { CentredService } from './centred.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Centred, CentredSchema } from './centred/schemas/centred.schema'
import { School, SchoolSchema } from './school/schemas/school.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Centred.name, schema: CentredSchema },
      { name: School.name, schema: SchoolSchema },
    ]),
  ],
  providers: [CentredService],
  exports: [CentredService, MongooseModule],
})
export class CentredModule {}
