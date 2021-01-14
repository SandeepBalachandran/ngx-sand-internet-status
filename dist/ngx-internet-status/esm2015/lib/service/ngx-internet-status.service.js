import { EventEmitter, Injectable } from '@angular/core';
import { OnlineStatusType } from '../ngx-internet-status/type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NgxInternetStatusService {
    constructor(http) {
        this.http = http;
        this.status = new EventEmitter(true);
        this.bind();
        window.addEventListener(NgxInternetStatusService.EVENT_TYPE_ONLINE, this.onOnline);
        window.addEventListener(NgxInternetStatusService.EVENT_TYPE_OFFLINE, this.onOffline);
    }
    ngOnDestroy() {
        try {
            window.removeEventListener(NgxInternetStatusService.EVENT_TYPE_ONLINE, this.onOnline);
            window.removeEventListener(NgxInternetStatusService.EVENT_TYPE_OFFLINE, this.onOffline);
        }
        catch (e) {
            console.log(e);
        }
    }
    bind() {
        console.log(this);
        this.onOnline = this.onOnline.bind(this);
        this.onOffline = this.onOffline.bind(this);
    }
    onOnline() {
        this.status.emit(OnlineStatusType.ONLINE);
    }
    onOffline() {
        this.status.emit(OnlineStatusType.OFFLINE);
    }
}
NgxInternetStatusService.EVENT_TYPE_ONLINE = 'online';
NgxInternetStatusService.EVENT_TYPE_OFFLINE = 'offline';
NgxInternetStatusService.ɵfac = function NgxInternetStatusService_Factory(t) { return new (t || NgxInternetStatusService)(i0.ɵɵinject(i1.HttpClient)); };
NgxInternetStatusService.ɵprov = i0.ɵɵdefineInjectable({ token: NgxInternetStatusService, factory: NgxInternetStatusService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxInternetStatusService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGVybmV0LXN0YXR1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkQ6L0V4cGVyaW1lbnRzL0ludGVybmV0U3RhdHVzL3Byb2plY3RzL25neC1pbnRlcm5ldC1zdGF0dXMvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2Uvbmd4LWludGVybmV0LXN0YXR1cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7QUFPcEUsTUFBTSxPQUFPLHdCQUF3QjtJQUtuQyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSjdCLFdBQU0sR0FBRyxJQUFJLFlBQVksQ0FBbUIsSUFBSSxDQUFDLENBQUM7UUFLdkQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osTUFBTSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFHRCxXQUFXO1FBQ1QsSUFBSTtZQUNGLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEYsTUFBTSxDQUFDLG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtJQUVILENBQUM7SUFFTyxJQUFJO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVPLFFBQVE7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7O0FBaENNLDBDQUFpQixHQUFHLFFBQVEsQ0FBQztBQUM3QiwyQ0FBa0IsR0FBRyxTQUFTLENBQUM7Z0dBSDNCLHdCQUF3QjtnRUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3QixtQkFGdkIsTUFBTTtrREFFUCx3QkFBd0I7Y0FIcEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ubGluZVN0YXR1c1R5cGUgfSBmcm9tICcuLi9uZ3gtaW50ZXJuZXQtc3RhdHVzL3R5cGUuZW51bSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neEludGVybmV0U3RhdHVzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBzdGF0dXMgPSBuZXcgRXZlbnRFbWl0dGVyPE9ubGluZVN0YXR1c1R5cGU+KHRydWUpO1xuICBzdGF0aWMgRVZFTlRfVFlQRV9PTkxJTkUgPSAnb25saW5lJztcbiAgc3RhdGljIEVWRU5UX1RZUEVfT0ZGTElORSA9ICdvZmZsaW5lJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLmJpbmQoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihOZ3hJbnRlcm5ldFN0YXR1c1NlcnZpY2UuRVZFTlRfVFlQRV9PTkxJTkUsIHRoaXMub25PbmxpbmUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKE5neEludGVybmV0U3RhdHVzU2VydmljZS5FVkVOVF9UWVBFX09GRkxJTkUsIHRoaXMub25PZmZsaW5lKTtcbiAgfVxuXG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKE5neEludGVybmV0U3RhdHVzU2VydmljZS5FVkVOVF9UWVBFX09OTElORSwgdGhpcy5vbk9ubGluZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihOZ3hJbnRlcm5ldFN0YXR1c1NlcnZpY2UuRVZFTlRfVFlQRV9PRkZMSU5FLCB0aGlzLm9uT2ZmbGluZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIGJpbmQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcylcbiAgICB0aGlzLm9uT25saW5lID0gdGhpcy5vbk9ubGluZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25PZmZsaW5lID0gdGhpcy5vbk9mZmxpbmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgb25PbmxpbmUoKSB7XG4gICAgdGhpcy5zdGF0dXMuZW1pdChPbmxpbmVTdGF0dXNUeXBlLk9OTElORSk7XG4gIH1cblxuICBwcml2YXRlIG9uT2ZmbGluZSgpIHtcbiAgICB0aGlzLnN0YXR1cy5lbWl0KE9ubGluZVN0YXR1c1R5cGUuT0ZGTElORSk7XG4gIH1cbn0iXX0=