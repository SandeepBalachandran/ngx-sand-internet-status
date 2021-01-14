import { TestBed } from '@angular/core/testing';

import { NgxInternetStatusService } from './ngx-internet-status.service';

describe('NgxInternetStatusService', () => {
  let service: NgxInternetStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxInternetStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
