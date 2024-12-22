import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumetypesComponent } from './perfumetypes.component';

describe('PerfumetypesComponent', () => {
  let component: PerfumetypesComponent;
  let fixture: ComponentFixture<PerfumetypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfumetypesComponent]
    });
    fixture = TestBed.createComponent(PerfumetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
