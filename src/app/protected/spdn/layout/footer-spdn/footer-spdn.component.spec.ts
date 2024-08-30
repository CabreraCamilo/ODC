import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSpdnComponent } from './footer-spdn.component';

describe('FooterSpdnComponent', () => {
  let component: FooterSpdnComponent;
  let fixture: ComponentFixture<FooterSpdnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSpdnComponent]
    });
    fixture = TestBed.createComponent(FooterSpdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
