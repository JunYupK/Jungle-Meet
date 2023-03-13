import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway(4001, { cors: { origin: 'http://localhost:3000' }, transports: ['websocket', 'polling'] })
export class WebRTCGateway {
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('message')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }
}
