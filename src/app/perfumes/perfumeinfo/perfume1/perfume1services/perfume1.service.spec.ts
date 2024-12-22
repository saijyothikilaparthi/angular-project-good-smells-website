import { TestBed } from '@angular/core/testing';

import { Perfume1Service } from './perfume1.service';

describe('Perfume1Service', () => {
  let service: Perfume1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Perfume1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
