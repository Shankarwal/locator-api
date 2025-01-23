import { Injectable } from '@nestjs/common';
import { getLatLongFromIP } from './utils/helpers';
import { ConfigService } from '@nestjs/config';
// import { WebServiceClient } from '@maxmind/geoip2-node';

@Injectable()
export class AppService {
  private readonly client;

  constructor(private configService: ConfigService) {
    // const accountId =
    //   this.configService.get<string>('MAXMIND_ACCOUNT_ID') || '';
    // const maxmindPassKey =
    //   this.configService.get<string>('MAXMIND_PASS_KEY') || '';
    // const maxmindHost = this.configService.get<string>('MAXMIND_HOST');
    // this.client = new WebServiceClient(accountId, maxmindPassKey, {
    //   host: maxmindHost,
    // });
  }
  getHello(): string {
    return 'Hello World!';
  }

  async getIpLatLong(ip: string): Promise<any> {
    // Sample code to get the IP using Maxmind which geoip-lite is using
    //   const { location } = await client?.city(ip);
    //   const maxmindData = {
    //     ...location,
    //   };

    const data = await getLatLongFromIP(ip);
    const response = {
      lat: data.geoIpLiteData?.ll[0],
      long: data.geoIpLiteData?.ll[1],
    };
    return response;
  }
}
