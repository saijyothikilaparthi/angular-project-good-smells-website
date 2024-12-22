import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scent3Component } from './scent3.component';

describe('Scent3Component', () => {
  let component: Scent3Component;
  let fixture: ComponentFixture<Scent3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scent3Component]
    });
    fixture = TestBed.createComponent(Scent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
