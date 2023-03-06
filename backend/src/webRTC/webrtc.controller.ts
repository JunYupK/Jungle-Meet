import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class WebRTCController {
  @Get()
  @Render('webrtc')
  root() {
    return { title: 'WebRTC' };
  }
}
