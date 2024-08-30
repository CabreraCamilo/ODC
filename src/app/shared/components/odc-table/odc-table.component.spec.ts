import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcTableComponent } from './odc-table.component';

describe('OdcTableComponent', () => {
  let component: OdcTableComponent;
  let fixture: ComponentFixture<OdcTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdcTableComponent]
    });
    fixture = TestBed.createComponent(OdcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
