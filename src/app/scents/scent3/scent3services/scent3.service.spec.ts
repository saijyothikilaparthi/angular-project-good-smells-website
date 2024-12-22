import { TestBed } from '@angular/core/testing';

import { Scent3Service } from './scent3.service';

describe('Scent3Service', () => {
  let service: Scent3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Scent3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
