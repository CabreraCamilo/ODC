import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcBarSearchComponent } from './odc-bar-search.component';

describe('OdcBarSearchComponent', () => {
  let component: OdcBarSearchComponent;
  let fixture: ComponentFixture<OdcBarSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdcBarSearchComponent]
    });
    fixture = TestBed.createComponent(OdcBarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
