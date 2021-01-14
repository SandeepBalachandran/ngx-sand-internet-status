import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgxInternetStatusService,  } from "../service/ngx-internet-status.service";
import { OnlineStatusType } from './type.enum'

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
  }
  ngOnChanges(): void {

  }

}
