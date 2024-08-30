import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcPaginatorComponent } from './odc-paginator.component';

describe('OdcPaginatorComponent', () => {
  let component: OdcPaginatorComponent;
  let fixture: ComponentFixture<OdcPaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdcPaginatorComponent]
    });
    fixture = TestBed.createComponent(OdcPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
