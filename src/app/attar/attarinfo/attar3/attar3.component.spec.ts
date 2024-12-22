import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attar3Component } from './attar3.component';

describe('Attar3Component', () => {
  let component: Attar3Component;
  let fixture: ComponentFixture<Attar3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Attar3Component]
    });
    fixture = TestBed.createComponent(Attar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
