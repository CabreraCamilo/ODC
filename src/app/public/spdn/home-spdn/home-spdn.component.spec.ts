import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpdnComponent } from './home-spdn.component';

describe('HomeSpdnComponent', () => {
  let component: HomeSpdnComponent;
  let fixture: ComponentFixture<HomeSpdnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSpdnComponent]
    });
    fixture = TestBed.createComponent(HomeSpdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
