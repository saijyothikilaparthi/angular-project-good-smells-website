import { TestBed } from '@angular/core/testing';

import { Scent1Service } from './scent1.service';

describe('Scent1Service', () => {
  let service: Scent1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Scent1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
