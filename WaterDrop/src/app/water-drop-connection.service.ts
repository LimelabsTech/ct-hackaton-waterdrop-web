import { Web3ConnectionService } from './web3-connection.service';
import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { WaterGoverning } from './contract-abis/WaterGoverning';
import { WaterVauchers } from './contract-abis/WaterVauchers';
import * as crypto from 'crypto-browserify';
import { Buffer } from 'buffer';

@Injectable()
export class WaterDropConnectionService {

  private waterGoverningContract: any;
  private waterGoverningAddress = '0x4e71920b7330515faf5ea0c690f1ad06a85fb60c';

  private waterVauchersContract: any;
  private waterVauchersAddress = '0x8acee021a27779d8e98b9650722676b850b25e11';

  constructor(private web3Service: Web3ConnectionService) {
    this.waterGoverningContract = new this.web3Service.web3.eth.Contract(
      WaterGoverning.abi,
      this.waterGoverningAddress,
    );

    this.waterVauchersContract = new this.web3Service.web3.eth.Contract(
      WaterVauchers.abi,
      this.waterVauchersAddress,
    );


  }

  public async getMyCurrentWaterAllowance(waterMeterAddress: string) {
    const allowedLitres = await this.waterGoverningContract.methods.meterLiters(
      waterMeterAddress
    ).call();
    return allowedLitres;
  }

  public async estimatePrice(waterMeterAddress: string, liters: number) {
    const quotation = await this.waterVauchersContract.methods.estimatePrice(
      waterMeterAddress,
      liters
    ).call();
    return quotation;
  }

  public async buyVoucher(waterMeterAddress: string, liters: number) {
    const voucherCode = Buffer.from(crypto.randomBytes(32)).toString('hex');
    const quotation = await this.estimatePrice(waterMeterAddress, liters);
    await this.waterVauchersContract.methods.estimatePrice(
      waterMeterAddress,
      liters
    ).call();
    return { quotation, voucherCode };
  }

}
