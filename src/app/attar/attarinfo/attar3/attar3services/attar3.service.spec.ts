import { TestBed } from '@angular/core/testing';

import { Attar3Service } from './attar3.service';

describe('Attar3Service', () => {
  let service: Attar3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Attar3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
