import { Web3ConnectionService } from './web3-connection.service';
import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable()
export class WaterDropConnectionService {

  constructor(private web3Service: Web3ConnectionService) { }

  public getWeb3(): Web3 {
    return this.web3Service.web3;
  }

  public getMyAllowance() {

  }

}
