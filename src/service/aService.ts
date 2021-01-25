import { Provide, Inject } from '@midwayjs/decorator';

Provide('aService');
export default class AService {
  @Inject('bService')
  bService;

  test(): void {
    console.log(this.bService);
  }
}
