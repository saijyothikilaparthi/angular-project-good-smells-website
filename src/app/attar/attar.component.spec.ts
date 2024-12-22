import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttarComponent } from './attar.component';

describe('AttarComponent', () => {
  let component: AttarComponent;
  let fixture: ComponentFixture<AttarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttarComponent]
    });
    fixture = TestBed.createComponent(AttarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
