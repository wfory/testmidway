import { Provide, Inject } from '@midwayjs/decorator';

//import { IAService } from '@/interface/bill';

Provide('aService');
export default class AService {
  @Inject('bService')
  bService;

  test(): void {
    console.log(this.bService);
  }
}
