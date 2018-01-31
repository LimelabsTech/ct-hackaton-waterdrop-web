import { Web3ConnectionService } from './web3-connection.service';
import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { WaterGoverning } from './contract-abis/WaterGoverning';
import { WaterVauchers } from './contract-abis/WaterVauchers';

@Injectable()
export class WaterDropConnectionService {

  private intermediaryAddress = '0x627306090abaB3A6e1400e9345bC60c78a8BEf57';
  private intermediaryPK = 'c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3';

  private waterGoverningContract: any;
  private waterGoverningAddress = '0xf491289b5da695d7892b4960dcf48eb7e1acb6b8';

  private waterVauchersContract: any;
  private waterVauchersAddress = '0x7bf7ae2da6013aa8de29627e29e4b9fa807d4469';

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
    const randomHex = this.web3Service.web3.utils.randomHex(8);
    const voucherCode = this.web3Service.web3.utils.utf8ToHex(randomHex);

    const quotation: any = await this.estimatePrice(waterMeterAddress, liters);
    const purchaseMethod = this.waterVauchersContract.methods.purchaseVoucher(
      voucherCode,
      waterMeterAddress,
      liters
    );
    const estimatedGas = await purchaseMethod.estimateGas();
    const doubleGas = estimatedGas * 2;

    const callOptions = {
      from: this.intermediaryAddress,
    };

    const funcData = purchaseMethod.encodeABI(callOptions);
    const signedData = await this.web3Service.signTransaction(
      this.waterVauchersContract._address,
      this.intermediaryAddress,
      this.intermediaryPK,
      doubleGas,
      funcData,
    );

    const result = await this.web3Service.web3.eth.sendSignedTransaction(signedData);
    return { quotation, voucherCode, transactionHash: result.transactionHash };

  }

}
