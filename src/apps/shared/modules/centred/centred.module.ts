import { Module } from '@nestjs/common'
import { CentredService } from './centred.service'
import { CentredController } from './centred.controller'
import { CentredModule as DBCentredModule } from 'src/infrastructure/database/centred/centred.module'
import { CentredService as DBCentredService } from 'src/infrastructure/database/centred/centred.service'
import { SchoolController } from './school.controller'

@Module({
  imports: [DBCentredModule],
  providers: [CentredService, DBCentredService],
  controllers: [CentredController, SchoolController],
})
export class CentredModule {}
