import { Controller, Get, Param, Post } from '@nestjs/common'
import { CentredService } from './centred.service'

@Controller('admin/centred')
export class CentredController {
  constructor(private centredService: CentredService) {}

  @Get('/:id')
  async getCentred(@Param('id') centredId: string): Promise<any> {
    try {
      const centred = await this.centredService.getCentred(centredId)
      return centred
    } catch (e) {
      console.error(e)
    }
  }

  @Post('/')
  async createCentred(): Promise<any> {
    try {
      const centred = await this.centredService.createCentred({
        tenancyName: 'Appeiron 2',
        officialName: 'Appeiron IO',
        country: 'ESP',
        type: 'Consultancy',
        currencyName: 'EUR',
        apps: [
          {
            app: 'PAYMENTS',
            plan: 'PROFESSIONAL',
          },
        ],
      })
      return centred
    } catch (e) {
      console.error(e)
    }
  }
}
