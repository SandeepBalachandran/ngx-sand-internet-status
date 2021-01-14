import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxInternetStatusModule } from 'ngx-internet-status'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxInternetStatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
