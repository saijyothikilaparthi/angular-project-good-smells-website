import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attar2Component } from './attar2.component';

describe('Attar2Component', () => {
  let component: Attar2Component;
  let fixture: ComponentFixture<Attar2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Attar2Component]
    });
    fixture = TestBed.createComponent(Attar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
