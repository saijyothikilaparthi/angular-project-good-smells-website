import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scent2Component } from './scent2.component';

describe('Scent2Component', () => {
  let component: Scent2Component;
  let fixture: ComponentFixture<Scent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scent2Component]
    });
    fixture = TestBed.createComponent(Scent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
