import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcFileUploadComponent } from './odc-file-upload.component';

describe('OdcFileUploadComponent', () => {
  let component: OdcFileUploadComponent;
  let fixture: ComponentFixture<OdcFileUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdcFileUploadComponent]
    });
    fixture = TestBed.createComponent(OdcFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
