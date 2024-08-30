import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcLoadingSpinnerComponent } from './odc-loading-spinner.component';

describe('OdcLoadingSpinnerComponent', () => {
  let component: OdcLoadingSpinnerComponent;
  let fixture: ComponentFixture<OdcLoadingSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdcLoadingSpinnerComponent]
    });
    fixture = TestBed.createComponent(OdcLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
