import * as geoIp from 'geoip-lite';
import { BadRequestException } from '@nestjs/common';

export const getLatLongFromIP = async (ip: string) => {
  let geoIpLiteData = geoIp?.lookup(ip);
  if (!geoIpLiteData) throw new BadRequestException('Invalid IP Address');
  return {
    geoIpLiteData,
  };
};
