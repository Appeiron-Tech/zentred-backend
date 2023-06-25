import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { CentredModule as AdmCentredModule } from './apps/shared/centred/centred.module'
import { CourseModule as AdmCourseModule } from './apps/admin/course/course.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DB'),
      }),
      inject: [ConfigService],
    }),
    //App

    //Admin
    AdmCentredModule,
    AdmCourseModule,
  ],
})
export class AppModule {}
