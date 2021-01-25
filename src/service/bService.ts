import { Provide, Inject } from '@midwayjs/decorator';
// import aService from './aService';

@Provide('bService')
export default class BService {
  @Inject('aService')
  aService;

  test(): void {
    this.aService.test();
  }
}
