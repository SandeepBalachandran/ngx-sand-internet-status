import { Component, Input } from '@angular/core';
import { OnlineStatusType } from './type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../service/ngx-internet-status.service";
import * as i2 from "@angular/common";
const _c0 = function (a0, a1) { return { "online": a0, "offline": a1 }; };
function NgxInternetStatusComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵelementStart(4, "label");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, ctx_r0.status === ctx_r0.OnlineStatusType.ONLINE, ctx_r0.status === ctx_r0.OnlineStatusType.OFFLINE));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.status === ctx_r0.OnlineStatusType.OFFLINE ? ctx_r0.settings.offlineTitle : ctx_r0.settings.onlineTitle, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.status === ctx_r0.OnlineStatusType.OFFLINE ? ctx_r0.settings.offlineText : ctx_r0.settings.onlineText);
} }
function NgxInternetStatusComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.status === ctx_r1.OnlineStatusType.OFFLINE ? ctx_r1.settings.offlineText : ctx_r1.settings.onlineText);
} }
export class NgxInternetStatusComponent {
    constructor(onlineStatusService) {
        this.onlineStatusService = onlineStatusService;
        this.OnlineStatusType = OnlineStatusType;
        /**
         * Settings option
         */
        this.settings = {};
        this.onlineStatusService.status.subscribe((status) => {
            this.status = status;
        });
    }
    ngOnInit() {
    }
    ngOnChanges() {
    }
}
NgxInternetStatusComponent.ɵfac = function NgxInternetStatusComponent_Factory(t) { return new (t || NgxInternetStatusComponent)(i0.ɵɵdirectiveInject(i1.NgxInternetStatusService)); };
NgxInternetStatusComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxInternetStatusComponent, selectors: [["ngx-sand-internet-status"]], inputs: { settings: "settings" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "banner", 3, "ngClass", 4, "ngIf"], ["class", "text-only", 4, "ngIf"], [1, "banner", 3, "ngClass"], [1, "text-only"]], template: function NgxInternetStatusComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxInternetStatusComponent_div_0_Template, 6, 6, "div", 0);
        i0.ɵɵtemplate(1, NgxInternetStatusComponent_div_1_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.status !== undefined && ctx.settings.type === "banner");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.settings.type === "textonly");
    } }, directives: [i2.NgIf, i2.NgClass], styles: [".online[_ngcontent-%COMP%]{-webkit-animation:online-response .5s 1;-webkit-animation-delay:1s;-webkit-animation-fill-mode:forwards;animation:online-response .5s 1;animation-delay:2s;animation-fill-mode:forwards;background-color:green;border:1px solid green}.offline[_ngcontent-%COMP%]{background-color:red;border:1px solid red}.banner[_ngcontent-%COMP%]{border-radius:3px;box-shadow:1px 1px 5px 4px hsla(0,0%,50.2%,.1803921568627451);color:#fff;font-family:sans-serif;font-weight:bolder;height:50px;line-height:25px;margin:22px;padding:15px;position:fixed;right:0;text-align:left;transition:.5s;z-index:999}.banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;line-height:24px;margin:0 0 8px}.banner[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}@keyframes online-response{0%{opacity:1}to{opacity:0}}@-webkit-keyframes online-response{0%{opacity:1}to{opacity:0}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxInternetStatusComponent, [{
        type: Component,
        args: [{
                selector: "ngx-sand-internet-status",
                templateUrl: "./ngx-internet-status.component.html",
                styleUrls: ['./ngx-internet-status.component.scss']
            }]
    }], function () { return [{ type: i1.NgxInternetStatusService }]; }, { settings: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGVybmV0LXN0YXR1cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovRXhwZXJpbWVudHMvSW50ZXJuZXRTdGF0dXMvcHJvamVjdHMvbmd4LWludGVybmV0LXN0YXR1cy9zcmMvIiwic291cmNlcyI6WyJsaWIvbmd4LWludGVybmV0LXN0YXR1cy9uZ3gtaW50ZXJuZXQtc3RhdHVzLmNvbXBvbmVudC50cyIsImxpYi9uZ3gtaW50ZXJuZXQtc3RhdHVzL25neC1pbnRlcm5ldC1zdGF0dXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQTs7Ozs7O0lDRjlDLDhCQUNJO0lBQUEsMEJBQUs7SUFBQSxZQUF1RjtJQUFBLGlCQUFLO0lBQ2pHLDRCQUFPO0lBQUEsNkJBQU87SUFBQSxZQUFzRjtJQUFBLGlCQUFRO0lBQUEsaUJBQU87SUFDdkgsaUJBQU07OztJQUh5RSx5SkFBMEc7SUFDaEwsZUFBdUY7SUFBdkYsOElBQXVGO0lBQzlFLGVBQXNGO0lBQXRGLGtJQUFzRjs7O0lBR3hHLDhCQUNJO0lBQUEsNEJBQU07SUFBQSxZQUFzRjtJQUFBLGlCQUFPO0lBQ3ZHLGlCQUFNOzs7SUFESSxlQUFzRjtJQUF0RixrSUFBc0Y7O0FER2hHLE1BQU0sT0FBTywwQkFBMEI7SUFXckMsWUFBb0IsbUJBQTZDO1FBQTdDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBMEI7UUFSakUscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFFcEM7O1dBRUc7UUFDYSxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBSWpDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBd0IsRUFBRSxFQUFFO1lBQ3JFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBQ0QsV0FBVztJQUVYLENBQUM7O29HQXJCVSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ1R2QywyRUFDSTtRQUlKLDJFQUNJOztRQU5pQixpRkFBeUQ7UUFLdkQsZUFBa0M7UUFBbEMsdURBQWtDOztrRERJNUMsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQzthQUNwRDsyRUFTaUIsUUFBUTtrQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hJbnRlcm5ldFN0YXR1c1NlcnZpY2UsICB9IGZyb20gXCIuLi9zZXJ2aWNlL25neC1pbnRlcm5ldC1zdGF0dXMuc2VydmljZVwiO1xuaW1wb3J0IHsgT25saW5lU3RhdHVzVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibmd4LXNhbmQtaW50ZXJuZXQtc3RhdHVzXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbmd4LWludGVybmV0LXN0YXR1cy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtaW50ZXJuZXQtc3RhdHVzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4SW50ZXJuZXRTdGF0dXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsT25DaGFuZ2VzIHtcblxuICBzdGF0dXM6IE9ubGluZVN0YXR1c1R5cGU7XG4gIE9ubGluZVN0YXR1c1R5cGUgPSBPbmxpbmVTdGF0dXNUeXBlO1xuXG4gIC8qKlxuICAgKiBTZXR0aW5ncyBvcHRpb25cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXR0aW5nczogYW55ID0ge307XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9ubGluZVN0YXR1c1NlcnZpY2U6IE5neEludGVybmV0U3RhdHVzU2VydmljZSkge1xuICAgIHRoaXMub25saW5lU3RhdHVzU2VydmljZS5zdGF0dXMuc3Vic2NyaWJlKChzdGF0dXM6IE9ubGluZVN0YXR1c1R5cGUpID0+IHtcbiAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG5cbiAgfVxuXG59XG4iLCI8ZGl2ICBjbGFzcz1cImJhbm5lclwiICpuZ0lmPVwic3RhdHVzICE9PSB1bmRlZmluZWQgJiYgc2V0dGluZ3MudHlwZSA9PT0nYmFubmVyJ1wiIFtuZ0NsYXNzXT1cInsnb25saW5lJzogc3RhdHVzID09PSBPbmxpbmVTdGF0dXNUeXBlLk9OTElORSwgJ29mZmxpbmUnOnN0YXR1cyA9PT0gT25saW5lU3RhdHVzVHlwZS5PRkZMSU5FIH1cIj5cclxuICAgIDxoMj4ge3tzdGF0dXMgPT09IE9ubGluZVN0YXR1c1R5cGUuT0ZGTElORSA/IHNldHRpbmdzLm9mZmxpbmVUaXRsZSA6IHNldHRpbmdzLm9ubGluZVRpdGxlIH19PC9oMj5cclxuICAgIDxzcGFuPiA8bGFiZWw+e3sgc3RhdHVzID09PSBPbmxpbmVTdGF0dXNUeXBlLk9GRkxJTkUgPyBzZXR0aW5ncy5vZmZsaW5lVGV4dCA6IHNldHRpbmdzLm9ubGluZVRleHQgfX08L2xhYmVsPjwvc3Bhbj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwidGV4dC1vbmx5XCIgKm5nSWY9XCJzZXR0aW5ncy50eXBlPT09J3RleHRvbmx5J1wiPlxyXG4gICAgPHNwYW4+e3sgc3RhdHVzID09PSBPbmxpbmVTdGF0dXNUeXBlLk9GRkxJTkUgPyBzZXR0aW5ncy5vZmZsaW5lVGV4dCA6IHNldHRpbmdzLm9ubGluZVRleHQgfX08L3NwYW4+XHJcbjwvZGl2PiJdfQ==