import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { OnlineStatusType } from '../ngx-internet-status/type.enum';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NgxInternetStatusService implements OnDestroy {
  public status = new EventEmitter<OnlineStatusType>(true);
  static EVENT_TYPE_ONLINE = 'online';
  static EVENT_TYPE_OFFLINE = 'offline';

  constructor(private http: HttpClient) {
    this.bind();
    window.addEventListener(NgxInternetStatusService.EVENT_TYPE_ONLINE, this.onOnline);
    window.addEventListener(NgxInternetStatusService.EVENT_TYPE_OFFLINE, this.onOffline);
  }


  ngOnDestroy(): void {
    try {
      window.removeEventListener(NgxInternetStatusService.EVENT_TYPE_ONLINE, this.onOnline);
      window.removeEventListener(NgxInternetStatusService.EVENT_TYPE_OFFLINE, this.onOffline);
    } catch (e) {
      console.log(e);
    }

  }

  private bind() {
    console.log(this)
    this.onOnline = this.onOnline.bind(this);
    this.onOffline = this.onOffline.bind(this);
  }

  private onOnline() {
    this.status.emit(OnlineStatusType.ONLINE);
  }

  private onOffline() {
    this.status.emit(OnlineStatusType.OFFLINE);
  }
}