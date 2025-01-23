import { Body, Controller, Get, Ip, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getIpLatLong(@Body() data: { ip: string }, @Ip() reqIp: any): Promise<any> {
    const { ip = reqIp } = data;
    return this.appService.getIpLatLong(ip);
  }
}
