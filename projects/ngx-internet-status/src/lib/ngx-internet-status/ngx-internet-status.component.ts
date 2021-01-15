import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgxInternetStatusService,  } from "../service/ngx-internet-status.service";
import { OnlineStatusType } from './type.enum'
import { Settings } from '../models/settings.model'

@Component({
  selector: "ngx-sand-internet-status",
  templateUrl: "./ngx-internet-status.component.html",
  styleUrls: ['./ngx-internet-status.component.scss']
})
export class NgxInternetStatusComponent implements OnInit,OnChanges {

  status: OnlineStatusType;
  OnlineStatusType = OnlineStatusType;

  /**
   * Settings option
   */
  @Input() public settings: any = {};


  constructor(private onlineStatusService: NgxInternetStatusService) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      this.status = status;
    });
  }

  ngOnInit(): void {
    this.settingsInit();
  }
  ngOnChanges(): void {

  }

  /**
   * initialize the settings and other properties
   */
  private settingsInit(): void {
    const settings: Settings = {
      type :'banner',
      onlineTitle:'Title - Online',
      offlineTitle:'Title - offline',
      onlineText:'online',
      offlineText:'offline',
    };
    /*
      * if incoming settings object is empty ,
      * it will be initialized with predefiened values.
    */
    if (this.settings === 'undefined' || Object.keys(this.settings).length === 0) {
      this.settings = { ...settings };
    }

    /*
      * Replacing predifined values by incoming values.
      * If no incoming value, predefined value will be taken
    */


    for (const key of Object.keys(settings)) {
      this.settings[key] = this.settings[key] ? this.settings[key] : settings[key];
    }
  }
}
