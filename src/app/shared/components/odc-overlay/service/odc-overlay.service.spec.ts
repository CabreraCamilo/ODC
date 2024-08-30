import { TestBed } from '@angular/core/testing';

import { OdcOverlayService } from './odc-overlay.service';

describe('OdcOverlayService', () => {
  let service: OdcOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdcOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
