import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxInternetStatusComponent } from './ngx-internet-status/ngx-internet-status.component';



@NgModule({
  declarations: [NgxInternetStatusComponent],
  imports: [HttpClientModule,FormsModule,BrowserModule,CommonModule],
  exports: [NgxInternetStatusComponent]
})
export class NgxInternetStatusModule { }
