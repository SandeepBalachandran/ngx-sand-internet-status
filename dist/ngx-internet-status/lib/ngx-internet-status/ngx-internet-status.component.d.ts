import { OnChanges, OnInit } from '@angular/core';
import { NgxInternetStatusService } from "../service/ngx-internet-status.service";
import { OnlineStatusType } from './type.enum';
import * as i0 from "@angular/core";
export declare class NgxInternetStatusComponent implements OnInit, OnChanges {
    private onlineStatusService;
    status: OnlineStatusType;
    OnlineStatusType: typeof OnlineStatusType;
    /**
     * Settings option
     */
    settings: any;
    constructor(onlineStatusService: NgxInternetStatusService);
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDef<NgxInternetStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NgxInternetStatusComponent, "ngx-sand-internet-status", never, { "settings": "settings"; }, {}, never, never>;
}
