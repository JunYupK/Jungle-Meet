import { NestFactory } from '@nestjs/core';
import { WebRTCModule } from './webRTC/webrtc.module';

async function bootstrap() {
  const app = await NestFactory.create(WebRTCModule);
  await app.listen(4000);
}
bootstrap();
