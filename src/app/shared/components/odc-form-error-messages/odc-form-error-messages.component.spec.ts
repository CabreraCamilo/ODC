import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcFormErrorMessagesComponent } from './odc-form-error-messages.component';

describe('OdcFormErrorMessagesComponent', () => {
  let component: OdcFormErrorMessagesComponent;
  let fixture: ComponentFixture<OdcFormErrorMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdcFormErrorMessagesComponent]
    });
    fixture = TestBed.createComponent(OdcFormErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
