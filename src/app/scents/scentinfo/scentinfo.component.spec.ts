import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScentinfoComponent } from './scentinfo.component';

describe('ScentinfoComponent', () => {
  let component: ScentinfoComponent;
  let fixture: ComponentFixture<ScentinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScentinfoComponent]
    });
    fixture = TestBed.createComponent(ScentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
