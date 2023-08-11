import { Body, Controller, Param, Patch, Post, UseInterceptors } from '@nestjs/common'
import { CentredService } from './centred.service'
import { UpdateSchoolDto } from './dto/updateSchool.dto'
import { LoggerInterceptor } from '../../interceptors/app-logger.interceptor'

@UseInterceptors(LoggerInterceptor)
@Controller('admin/school')
export class SchoolController {
  constructor(private centredService: CentredService) {}

  @Post('/')
  async createSchool(): Promise<any> {
    try {
      const centred = await this.centredService.createSchool({
        centredId: '6498a94e213a7fc800781e1a',
        name: 'First School',
        description: 'First School Appeiron',
        address: 'Gran Vía Puig de randa 2',
        type: 'ADM',
      })
      return centred
    } catch (e) {
      console.error(e)
    }
  }

  @Patch('/:id')
  async updateSchool(@Param('id') schoolId: string, @Body() school: UpdateSchoolDto): Promise<any> {
    try {
      return await this.centredService.updateSchool(schoolId, school)
    } catch (e) {
      console.error(e)
    }
  }
}
