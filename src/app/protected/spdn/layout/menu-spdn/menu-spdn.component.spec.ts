import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSpdnComponent } from './menu-spdn.component';

describe('MenuSpdnComponent', () => {
  let component: MenuSpdnComponent;
  let fixture: ComponentFixture<MenuSpdnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSpdnComponent]
    });
    fixture = TestBed.createComponent(MenuSpdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
