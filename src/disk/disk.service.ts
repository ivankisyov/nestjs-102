import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  allocateSpace(size: number) {
    this.powerService.supplyPower(20);
    console.log(`Allocating ${size} GB of disk space`);
  }
}
