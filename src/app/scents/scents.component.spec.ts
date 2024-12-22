import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScentsComponent } from './scents.component';

describe('ScentsComponent', () => {
  let component: ScentsComponent;
  let fixture: ComponentFixture<ScentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScentsComponent]
    });
    fixture = TestBed.createComponent(ScentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
