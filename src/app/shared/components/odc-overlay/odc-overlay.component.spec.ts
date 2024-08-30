import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcOverlayComponent } from './odc-overlay.component';

describe('OdcOverlayComponent', () => {
  let component: OdcOverlayComponent;
  let fixture: ComponentFixture<OdcOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdcOverlayComponent]
    });
    fixture = TestBed.createComponent(OdcOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
