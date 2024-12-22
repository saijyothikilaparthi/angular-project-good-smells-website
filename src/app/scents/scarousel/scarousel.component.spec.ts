import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarouselComponent } from './scarousel.component';

describe('ScarouselComponent', () => {
  let component: ScarouselComponent;
  let fixture: ComponentFixture<ScarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScarouselComponent]
    });
    fixture = TestBed.createComponent(ScarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
