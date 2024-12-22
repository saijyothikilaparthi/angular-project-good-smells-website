import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttartypesComponent } from './attartypes.component';

describe('AttartypesComponent', () => {
  let component: AttartypesComponent;
  let fixture: ComponentFixture<AttartypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttartypesComponent]
    });
    fixture = TestBed.createComponent(AttartypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
