import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attar1Component } from './attar1.component';

describe('Attar1Component', () => {
  let component: Attar1Component;
  let fixture: ComponentFixture<Attar1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Attar1Component]
    });
    fixture = TestBed.createComponent(Attar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
