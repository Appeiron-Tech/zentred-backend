import { Controller, Post } from '@nestjs/common'
import { CentredService } from './centred.service'

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
}
