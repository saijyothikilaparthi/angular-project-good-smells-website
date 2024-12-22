import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcarouselComponent } from './acarousel.component';

describe('AcarouselComponent', () => {
  let component: AcarouselComponent;
  let fixture: ComponentFixture<AcarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcarouselComponent]
    });
    fixture = TestBed.createComponent(AcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
