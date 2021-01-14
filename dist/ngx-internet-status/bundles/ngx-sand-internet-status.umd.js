(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('@angular/forms'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ngx-sand-internet-status', ['exports', '@angular/core', '@angular/common/http', '@angular/common', '@angular/forms', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['ngx-sand-internet-status'] = {}, global.ng.core, global.ng.common.http, global.ng.common, global.ng.forms, global.ng.platformBrowser));
}(this, (function (exports, i0, i1, i2, forms, platformBrowser) { 'use strict';

    (function (OnlineStatusType) {
        OnlineStatusType[OnlineStatusType["OFFLINE"] = 0] = "OFFLINE";
        OnlineStatusType[OnlineStatusType["ONLINE"] = 1] = "ONLINE";
    })(exports.OnlineStatusType || (exports.OnlineStatusType = {}));

    var NgxInternetStatusService = /** @class */ (function () {
        function NgxInternetStatusService(http) {
            this.http = http;
            this.status = new i0.EventEmitter(true);
            this.bind();
            window.addEventListener(NgxInternetStatusService.EVENT_TYPE_ONLINE, this.onOnline);
            window.addEventListener(NgxInternetStatusService.EVENT_TYPE_OFFLINE, this.onOffline);
        }
        NgxInternetStatusService.prototype.ngOnDestroy = function () {
            try {
                window.removeEventListener(NgxInternetStatusService.EVENT_TYPE_ONLINE, this.onOnline);
                window.removeEventListener(NgxInternetStatusService.EVENT_TYPE_OFFLINE, this.onOffline);
            }
            catch (e) {
                console.log(e);
            }
        };
        NgxInternetStatusService.prototype.bind = function () {
            console.log(this);
            this.onOnline = this.onOnline.bind(this);
            this.onOffline = this.onOffline.bind(this);
        };
        NgxInternetStatusService.prototype.onOnline = function () {
            this.status.emit(exports.OnlineStatusType.ONLINE);
        };
        NgxInternetStatusService.prototype.onOffline = function () {
            this.status.emit(exports.OnlineStatusType.OFFLINE);
        };
        return NgxInternetStatusService;
    }());
    NgxInternetStatusService.EVENT_TYPE_ONLINE = 'online';
    NgxInternetStatusService.EVENT_TYPE_OFFLINE = 'offline';
    NgxInternetStatusService.ɵfac = function NgxInternetStatusService_Factory(t) { return new (t || NgxInternetStatusService)(i0.ɵɵinject(i1.HttpClient)); };
    NgxInternetStatusService.ɵprov = i0.ɵɵdefineInjectable({ token: NgxInternetStatusService, factory: NgxInternetStatusService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgxInternetStatusService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1.HttpClient }]; }, null);
    })();

    var _c0 = function (a0, a1) { return { "online": a0, "offline": a1 }; };
    function NgxInternetStatusComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, ctx_r0.status === ctx_r0.OnlineStatusType.ONLINE, ctx_r0.status === ctx_r0.OnlineStatusType.OFFLINE));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r0.status === ctx_r0.OnlineStatusType.OFFLINE ? ctx_r0.settings.offlineTitle : ctx_r0.settings.onlineTitle, "");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r0.status === ctx_r0.OnlineStatusType.OFFLINE ? ctx_r0.settings.offlineText : ctx_r0.settings.onlineText);
        }
    }
    function NgxInternetStatusComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 3);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r1.status === ctx_r1.OnlineStatusType.OFFLINE ? ctx_r1.settings.offlineText : ctx_r1.settings.onlineText);
        }
    }
    var NgxInternetStatusComponent = /** @class */ (function () {
        function NgxInternetStatusComponent(onlineStatusService) {
            var _this = this;
            this.onlineStatusService = onlineStatusService;
            this.OnlineStatusType = exports.OnlineStatusType;
            /**
             * Settings option
             */
            this.settings = {};
            this.onlineStatusService.status.subscribe(function (status) {
                _this.status = status;
            });
        }
        NgxInternetStatusComponent.prototype.ngOnInit = function () {
        };
        NgxInternetStatusComponent.prototype.ngOnChanges = function () {
        };
        return NgxInternetStatusComponent;
    }());
    NgxInternetStatusComponent.ɵfac = function NgxInternetStatusComponent_Factory(t) { return new (t || NgxInternetStatusComponent)(i0.ɵɵdirectiveInject(NgxInternetStatusService)); };
    NgxInternetStatusComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxInternetStatusComponent, selectors: [["ngx-sand-internet-status"]], inputs: { settings: "settings" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "banner", 3, "ngClass", 4, "ngIf"], ["class", "text-only", 4, "ngIf"], [1, "banner", 3, "ngClass"], [1, "text-only"]], template: function NgxInternetStatusComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, NgxInternetStatusComponent_div_0_Template, 6, 6, "div", 0);
                i0.ɵɵtemplate(1, NgxInternetStatusComponent_div_1_Template, 3, 1, "div", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.status !== undefined && ctx.settings.type === "banner");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.settings.type === "textonly");
            }
        }, directives: [i2.NgIf, i2.NgClass], styles: [".online[_ngcontent-%COMP%]{-webkit-animation:online-response .5s 1;-webkit-animation-delay:1s;-webkit-animation-fill-mode:forwards;animation:online-response .5s 1;animation-delay:2s;animation-fill-mode:forwards;background-color:green;border:1px solid green}.offline[_ngcontent-%COMP%]{background-color:red;border:1px solid red}.banner[_ngcontent-%COMP%]{border-radius:3px;box-shadow:1px 1px 5px 4px hsla(0,0%,50.2%,.1803921568627451);color:#fff;font-family:sans-serif;font-weight:bolder;height:50px;line-height:25px;margin:22px;padding:15px;position:fixed;right:0;text-align:left;transition:.5s;z-index:999}.banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;line-height:24px;margin:0 0 8px}.banner[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}@keyframes online-response{0%{opacity:1}to{opacity:0}}@-webkit-keyframes online-response{0%{opacity:1}to{opacity:0}}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgxInternetStatusComponent, [{
                type: i0.Component,
                args: [{
                        selector: "ngx-sand-internet-status",
                        templateUrl: "./ngx-internet-status.component.html",
                        styleUrls: ['./ngx-internet-status.component.scss']
                    }]
            }], function () { return [{ type: NgxInternetStatusService }]; }, { settings: [{
                    type: i0.Input
                }] });
    })();

    var NgxInternetStatusModule = /** @class */ (function () {
        function NgxInternetStatusModule() {
        }
        return NgxInternetStatusModule;
    }());
    NgxInternetStatusModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxInternetStatusModule });
    NgxInternetStatusModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxInternetStatusModule_Factory(t) { return new (t || NgxInternetStatusModule)(); }, imports: [[i1.HttpClientModule, forms.FormsModule, platformBrowser.BrowserModule, i2.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxInternetStatusModule, { declarations: [NgxInternetStatusComponent], imports: [i1.HttpClientModule, forms.FormsModule, platformBrowser.BrowserModule, i2.CommonModule], exports: [NgxInternetStatusComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgxInternetStatusModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [NgxInternetStatusComponent],
                        imports: [i1.HttpClientModule, forms.FormsModule, platformBrowser.BrowserModule, i2.CommonModule],
                        exports: [NgxInternetStatusComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ngx-internet-status
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxInternetStatusComponent = NgxInternetStatusComponent;
    exports.NgxInternetStatusModule = NgxInternetStatusModule;
    exports.NgxInternetStatusService = NgxInternetStatusService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-sand-internet-status.umd.js.map
