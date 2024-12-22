import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfume3Component } from './perfume3.component';

describe('Perfume3Component', () => {
  let component: Perfume3Component;
  let fixture: ComponentFixture<Perfume3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Perfume3Component]
    });
    fixture = TestBed.createComponent(Perfume3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
