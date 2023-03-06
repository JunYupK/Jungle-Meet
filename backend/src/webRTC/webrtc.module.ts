import { Module } from '@nestjs/common';
import { WebRTCController } from './webrtc.controller';
import { WebRTCGateway } from './webrtc.gateway';

@Module({
  controllers: [WebRTCController],
  providers: [WebRTCGateway],
})
export class WebRTCModule {}
