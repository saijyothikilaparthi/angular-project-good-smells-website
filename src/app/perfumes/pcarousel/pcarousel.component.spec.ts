import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcarouselComponent } from './pcarousel.component';

describe('PcarouselComponent', () => {
  let component: PcarouselComponent;
  let fixture: ComponentFixture<PcarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcarouselComponent]
    });
    fixture = TestBed.createComponent(PcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
