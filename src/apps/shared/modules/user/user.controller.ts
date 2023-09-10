import { Controller, UseInterceptors, Post, Body } from '@nestjs/common'
import { LoggerInterceptor } from '../../interceptors/app-logger.interceptor'
import { UserService } from './user.service'
import { CreateUserDto } from './dtos/createUser.dto'

@UseInterceptors(LoggerInterceptor)
@Controller('admin/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  async createUser(@Body() user: CreateUserDto): Promise<any> {
    try {
      const createdUser = await this.userService.createUser(user)
      return createdUser
    } catch (e) {
      console.error(e)
    }
  }
}
