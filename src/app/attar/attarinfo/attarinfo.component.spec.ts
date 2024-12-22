import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttarinfoComponent } from './attarinfo.component';

describe('AttarinfoComponent', () => {
  let component: AttarinfoComponent;
  let fixture: ComponentFixture<AttarinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttarinfoComponent]
    });
    fixture = TestBed.createComponent(AttarinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
