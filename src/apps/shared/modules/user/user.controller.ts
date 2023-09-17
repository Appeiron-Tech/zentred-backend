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
  async loginUser(@Param('uid') uid: string): Promise<any> {
    try {
      const loggedInUser = await this.userService.loginUser(uid)
      return loggedInUser
    } catch (e) {
      console.error(e)
    }
  }

  @Patch('/logout/:uid')
  async logoutUser(@Param('uid') uid: string): Promise<void> {
    try {
      await this.userService.logoutUser(uid)
    } catch (e) {
      console.error(e)
    }
  }
}
