import { Component, OnInit } from '@angular/core';
import { WaterDropConnectionService } from '../water-drop-connection.service';

@Component({
  selector: 'wd-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {

  constructor(
    private waterDropConnection: WaterDropConnectionService
  ) { }

  ngOnInit() {
    console.log(this.waterDropConnection.getWeb3());
  }

}
