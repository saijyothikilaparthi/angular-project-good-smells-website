import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scent1Component } from './scent1.component';

describe('Scent1Component', () => {
  let component: Scent1Component;
  let fixture: ComponentFixture<Scent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scent1Component]
    });
    fixture = TestBed.createComponent(Scent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
