import { EventEmitter, OnDestroy } from '@angular/core';
import { OnlineStatusType } from '../ngx-internet-status/type.enum';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class NgxInternetStatusService implements OnDestroy {
    private http;
    status: EventEmitter<OnlineStatusType>;
    static EVENT_TYPE_ONLINE: string;
    static EVENT_TYPE_OFFLINE: string;
    constructor(http: HttpClient);
    ngOnDestroy(): void;
    private bind;
    private onOnline;
    private onOffline;
    static ɵfac: i0.ɵɵFactoryDef<NgxInternetStatusService, never>;
    static ɵprov: i0.ɵɵInjectableDef<NgxInternetStatusService>;
}
