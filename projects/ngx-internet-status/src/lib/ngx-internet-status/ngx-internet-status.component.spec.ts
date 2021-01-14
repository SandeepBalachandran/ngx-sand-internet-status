import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInternetStatusComponent } from './ngx-internet-status.component';

describe('NgxInternetStatusComponent', () => {
  let component: NgxInternetStatusComponent;
  let fixture: ComponentFixture<NgxInternetStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxInternetStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInternetStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
