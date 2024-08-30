import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSpdnComponent } from './header-spdn.component';

describe('HeaderSpdnComponent', () => {
  let component: HeaderSpdnComponent;
  let fixture: ComponentFixture<HeaderSpdnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSpdnComponent]
    });
    fixture = TestBed.createComponent(HeaderSpdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
