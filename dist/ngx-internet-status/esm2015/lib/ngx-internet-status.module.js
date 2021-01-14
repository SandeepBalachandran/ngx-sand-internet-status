import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxInternetStatusComponent } from './ngx-internet-status/ngx-internet-status.component';
import * as i0 from "@angular/core";
export class NgxInternetStatusModule {
}
NgxInternetStatusModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxInternetStatusModule });
NgxInternetStatusModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxInternetStatusModule_Factory(t) { return new (t || NgxInternetStatusModule)(); }, imports: [[HttpClientModule, FormsModule, BrowserModule, CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxInternetStatusModule, { declarations: [NgxInternetStatusComponent], imports: [HttpClientModule, FormsModule, BrowserModule, CommonModule], exports: [NgxInternetStatusComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxInternetStatusModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxInternetStatusComponent],
                imports: [HttpClientModule, FormsModule, BrowserModule, CommonModule],
                exports: [NgxInternetStatusComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGVybmV0LXN0YXR1cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiRDovRXhwZXJpbWVudHMvSW50ZXJuZXRTdGF0dXMvcHJvamVjdHMvbmd4LWludGVybmV0LXN0YXR1cy9zcmMvIiwic291cmNlcyI6WyJsaWIvbmd4LWludGVybmV0LXN0YXR1cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUFTakcsTUFBTSxPQUFPLHVCQUF1Qjs7MkRBQXZCLHVCQUF1Qjs2SEFBdkIsdUJBQXVCLGtCQUh6QixDQUFDLGdCQUFnQixFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsWUFBWSxDQUFDO3dGQUd2RCx1QkFBdUIsbUJBSm5CLDBCQUEwQixhQUMvQixnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLFlBQVksYUFDdkQsMEJBQTBCO2tEQUV6Qix1QkFBdUI7Y0FMbkMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLFlBQVksQ0FBQztnQkFDbEUsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5neEludGVybmV0U3RhdHVzQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtaW50ZXJuZXQtc3RhdHVzL25neC1pbnRlcm5ldC1zdGF0dXMuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05neEludGVybmV0U3RhdHVzQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGUsRm9ybXNNb2R1bGUsQnJvd3Nlck1vZHVsZSxDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTmd4SW50ZXJuZXRTdGF0dXNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5neEludGVybmV0U3RhdHVzTW9kdWxlIHsgfVxuIl19