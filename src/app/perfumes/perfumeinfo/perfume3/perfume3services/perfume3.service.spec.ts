import { TestBed } from '@angular/core/testing';

import { Perfume3Service } from './perfume3.service';

describe('Perfume3Service', () => {
  let service: Perfume3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Perfume3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
