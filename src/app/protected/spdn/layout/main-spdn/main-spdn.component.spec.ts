import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSpdnComponent } from './main-spdn.component';

describe('MainSpdnComponent', () => {
  let component: MainSpdnComponent;
  let fixture: ComponentFixture<MainSpdnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSpdnComponent]
    });
    fixture = TestBed.createComponent(MainSpdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
