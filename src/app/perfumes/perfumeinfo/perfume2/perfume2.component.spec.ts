import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfume2Component } from './perfume2.component';

describe('Perfume2Component', () => {
  let component: Perfume2Component;
  let fixture: ComponentFixture<Perfume2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Perfume2Component]
    });
    fixture = TestBed.createComponent(Perfume2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
