import { Provide,Inject } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';

@Provide()
export class UserService {
  @Inject('bService')
  bService;

  async getUser(options: IUserOptions) {
    this.bService.test();
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
