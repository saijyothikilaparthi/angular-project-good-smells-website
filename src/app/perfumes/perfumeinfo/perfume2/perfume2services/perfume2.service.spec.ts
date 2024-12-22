import { TestBed } from '@angular/core/testing';

import { Perfume2Service } from './perfume2.service';

describe('Perfume2Service', () => {
  let service: Perfume2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Perfume2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
