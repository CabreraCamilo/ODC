import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcDropdownComponent } from './odc-dropdown.component';

describe('OdcDropdownComponent', () => {
  let component: OdcDropdownComponent;
  let fixture: ComponentFixture<OdcDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdcDropdownComponent]
    });
    fixture = TestBed.createComponent(OdcDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
