import { NestFactory } from '@nestjs/core';
import { WebRTCModule } from './webRTC/webrtc.module';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(WebRTCModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(4000);
}
bootstrap();
