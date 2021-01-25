import { Controller, Get, Provide,Inject } from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {

  @Inject()
  userService;
  @Get('/')
  async home() {
    this.userService.getUser({ uid:'123' })
    return 'Hello Midwayjs!';
  }
}
