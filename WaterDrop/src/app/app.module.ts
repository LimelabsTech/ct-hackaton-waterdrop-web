import { WaterDropConnectionService } from './water-drop-connection.service';
import { Web3ConnectionService } from './web3-connection.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IssuerComponent } from './issuer/issuer.component';
import { ConsumerComponent } from './consumer/consumer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IssuerComponent,
    ConsumerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Web3ConnectionService,
    WaterDropConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
