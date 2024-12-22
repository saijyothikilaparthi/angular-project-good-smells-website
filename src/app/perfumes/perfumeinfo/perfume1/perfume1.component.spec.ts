import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfume1Component } from './perfume1.component';

describe('Perfume1Component', () => {
  let component: Perfume1Component;
  let fixture: ComponentFixture<Perfume1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Perfume1Component]
    });
    fixture = TestBed.createComponent(Perfume1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
