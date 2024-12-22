import { TestBed } from '@angular/core/testing';

import { Attar1Service } from './attar1.service';

describe('Attar1Service', () => {
  let service: Attar1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Attar1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
