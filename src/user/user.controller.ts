import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from "src/enum/config.enum";
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}
  @Get()
  getUser(): any {
    // const db = this.configService.get('DB');
    const db = this.configService.get(ConfigEnum.DB_DATABASE);
    console.log("🚀 ~ UserController ~ getUser ~ db:", db)

    // const DB_URL = this.configService.get('DB_UR');
    // console.log('🚀 ~ UserController ~ getUser ~ db:', this.configService);
    // console.log('🚀 ~ UserController ~ getUser ~ DB_URL:', DB_URL);
    return this.userService.getUser();
  }
  @Post()
  addUser(): any {
    return this.userService.addUser();
  }
}
