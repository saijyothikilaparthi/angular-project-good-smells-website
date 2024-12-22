import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeinfoComponent } from './perfumeinfo.component';

describe('PerfumeinfoComponent', () => {
  let component: PerfumeinfoComponent;
  let fixture: ComponentFixture<PerfumeinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfumeinfoComponent]
    });
    fixture = TestBed.createComponent(PerfumeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
