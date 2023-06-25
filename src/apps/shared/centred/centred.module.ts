import { Module } from '@nestjs/common'
import { CentredService } from './centred.service'
import { CentredController } from './centred.controller'
import { CentredModule as DBCentredModule } from 'src/infrastructure/database/centred/centred.module'
import { CentredService as DBCentredService } from 'src/infrastructure/database/centred/centred.service'

@Module({
  imports: [DBCentredModule],
  providers: [CentredService, DBCentredService],
  controllers: [CentredController],
})
export class CentredModule {}
