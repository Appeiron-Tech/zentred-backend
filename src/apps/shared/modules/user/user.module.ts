import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { UserModule as DBUserModule } from 'src/infrastructure/database/user/user.module'
import { UserService as DBUserService } from 'src/infrastructure/database/user/user.service'

@Module({
  imports: [DBUserModule],
  providers: [UserService, DBUserService],
  controllers: [UserController],
})
export class UserModule {}
