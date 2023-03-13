import { Controller, Get, Render } from '@nestjs/common';
import { WebRTCGateway } from './webrtc.gateway';

@Controller()
export class WebRTCController {
  constructor(private readonly webRTCGateway: WebRTCGateway) {}
  @Get()
  root() {
    console.log('root 진입');
  }
}
