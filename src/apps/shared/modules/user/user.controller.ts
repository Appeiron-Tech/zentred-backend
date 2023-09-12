import { Controller, UseInterceptors, Post, Body, Patch, Param } from '@nestjs/common'
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

  @Patch('/login/:uid')
  async loginUser(@Param('uid') userId: string): Promise<any> {
    try {
      const loggedInUser = await this.userService.loginUser(userId)
      return loggedInUser
    } catch (e) {
      console.error(e)
    }
  }
}
