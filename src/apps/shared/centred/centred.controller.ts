import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { CentredService } from './centred.service'
import { Centred } from './centred.class'
import { UpdateCentredDto } from './dto/updateCentred.dto'

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

  @Patch('/:id')
  async updateCentred(
    @Param('id') centredId: string,
    @Body() centred: UpdateCentredDto,
  ): Promise<any> {
    try {
      const dbUpdatedCentred = await this.centredService.updateCentred(centredId, centred)
      const updateCentred = new Centred(dbUpdatedCentred)
      return updateCentred.parseToRead()
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
