import { EventEmitter, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵproperty, ɵɵpureFunction2, ɵɵadvance, ɵɵtextInterpolate1, ɵɵtextInterpolate, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵɵtemplate, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf, NgClass, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

var OnlineStatusType;
(function (OnlineStatusType) {
    OnlineStatusType[OnlineStatusType["OFFLINE"] = 0] = "OFFLINE";
    OnlineStatusType[OnlineStatusType["ONLINE"] = 1] = "ONLINE";
})(OnlineStatusType || (OnlineStatusType = {}));

class NgxInternetStatusService {
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
NgxInternetStatusService.ɵfac = function NgxInternetStatusService_Factory(t) { return new (t || NgxInternetStatusService)(ɵɵinject(HttpClient)); };
NgxInternetStatusService.ɵprov = ɵɵdefineInjectable({ token: NgxInternetStatusService, factory: NgxInternetStatusService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxInternetStatusService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

const _c0 = function (a0, a1) { return { "online": a0, "offline": a1 }; };
function NgxInternetStatusComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "h2");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵelementStart(4, "label");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c0, ctx_r0.status === ctx_r0.OnlineStatusType.ONLINE, ctx_r0.status === ctx_r0.OnlineStatusType.OFFLINE));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.status === ctx_r0.OnlineStatusType.OFFLINE ? ctx_r0.settings.offlineTitle : ctx_r0.settings.onlineTitle, "");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.status === ctx_r0.OnlineStatusType.OFFLINE ? ctx_r0.settings.offlineText : ctx_r0.settings.onlineText);
} }
function NgxInternetStatusComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.status === ctx_r1.OnlineStatusType.OFFLINE ? ctx_r1.settings.offlineText : ctx_r1.settings.onlineText);
} }
class NgxInternetStatusComponent {
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
NgxInternetStatusComponent.ɵfac = function NgxInternetStatusComponent_Factory(t) { return new (t || NgxInternetStatusComponent)(ɵɵdirectiveInject(NgxInternetStatusService)); };
NgxInternetStatusComponent.ɵcmp = ɵɵdefineComponent({ type: NgxInternetStatusComponent, selectors: [["ngx-sand-internet-status"]], inputs: { settings: "settings" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "banner", 3, "ngClass", 4, "ngIf"], ["class", "text-only", 4, "ngIf"], [1, "banner", 3, "ngClass"], [1, "text-only"]], template: function NgxInternetStatusComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NgxInternetStatusComponent_div_0_Template, 6, 6, "div", 0);
        ɵɵtemplate(1, NgxInternetStatusComponent_div_1_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.status !== undefined && ctx.settings.type === "banner");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.settings.type === "textonly");
    } }, directives: [NgIf, NgClass], styles: [".online[_ngcontent-%COMP%]{-webkit-animation:online-response .5s 1;-webkit-animation-delay:1s;-webkit-animation-fill-mode:forwards;animation:online-response .5s 1;animation-delay:2s;animation-fill-mode:forwards;background-color:green;border:1px solid green}.offline[_ngcontent-%COMP%]{background-color:red;border:1px solid red}.banner[_ngcontent-%COMP%]{border-radius:3px;box-shadow:1px 1px 5px 4px hsla(0,0%,50.2%,.1803921568627451);color:#fff;font-family:sans-serif;font-weight:bolder;height:50px;line-height:25px;margin:22px;padding:15px;position:fixed;right:0;text-align:left;transition:.5s;z-index:999}.banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;line-height:24px;margin:0 0 8px}.banner[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}@keyframes online-response{0%{opacity:1}to{opacity:0}}@-webkit-keyframes online-response{0%{opacity:1}to{opacity:0}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxInternetStatusComponent, [{
        type: Component,
        args: [{
                selector: "ngx-sand-internet-status",
                templateUrl: "./ngx-internet-status.component.html",
                styleUrls: ['./ngx-internet-status.component.scss']
            }]
    }], function () { return [{ type: NgxInternetStatusService }]; }, { settings: [{
            type: Input
        }] }); })();

class NgxInternetStatusModule {
}
NgxInternetStatusModule.ɵmod = ɵɵdefineNgModule({ type: NgxInternetStatusModule });
NgxInternetStatusModule.ɵinj = ɵɵdefineInjector({ factory: function NgxInternetStatusModule_Factory(t) { return new (t || NgxInternetStatusModule)(); }, imports: [[HttpClientModule, FormsModule, BrowserModule, CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxInternetStatusModule, { declarations: [NgxInternetStatusComponent], imports: [HttpClientModule, FormsModule, BrowserModule, CommonModule], exports: [NgxInternetStatusComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxInternetStatusModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxInternetStatusComponent],
                imports: [HttpClientModule, FormsModule, BrowserModule, CommonModule],
                exports: [NgxInternetStatusComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-internet-status
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxInternetStatusComponent, NgxInternetStatusModule, NgxInternetStatusService, OnlineStatusType };
//# sourceMappingURL=ngx-sand-internet-status.js.map
