import { Controller, Get, Provide,Inject } from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {


  @Inject('bService')
  bService;
  @Get('/')
  async home() {
    this.bService.test()
    return 'Hello Midwayjs!';
  }
}
