import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class MainController {
  @Get()
  getMain() {
    return 'BE < = > FE 연결 테스트';
  }
}
