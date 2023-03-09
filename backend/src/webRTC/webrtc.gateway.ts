import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway(8080, { cors: true })
export class WebRTCGateway {
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('message')
  handleEvent(@MessageBody() data: string): string {
    console.log(data);
    return data;
  }
}
