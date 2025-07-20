import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return {
      code: 200,
      data: [],
      message: '请求用户列表成功！',
    };
  }

  addUser() {
    return {
      code: 200,
      data: [],
      message: '添加用户成功！',
    };
  }
}
