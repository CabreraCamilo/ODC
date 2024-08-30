import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceIndicadorComponent } from './avance-indicador.component';

describe('AvanceIndicadorComponent', () => {
  let component: AvanceIndicadorComponent;
  let fixture: ComponentFixture<AvanceIndicadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvanceIndicadorComponent]
    });
    fixture = TestBed.createComponent(AvanceIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
