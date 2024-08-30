import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAvanceModalComponent } from './registrar-avance-modal.component';

describe('RegistrarAvanceModalComponent', () => {
  let component: RegistrarAvanceModalComponent;
  let fixture: ComponentFixture<RegistrarAvanceModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAvanceModalComponent]
    });
    fixture = TestBed.createComponent(RegistrarAvanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
