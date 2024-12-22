import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenttypesComponent } from './scenttypes.component';

describe('ScenttypesComponent', () => {
  let component: ScenttypesComponent;
  let fixture: ComponentFixture<ScenttypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScenttypesComponent]
    });
    fixture = TestBed.createComponent(ScenttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
