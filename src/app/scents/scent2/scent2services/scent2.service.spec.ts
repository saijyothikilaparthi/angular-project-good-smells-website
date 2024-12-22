import { TestBed } from '@angular/core/testing';

import { Scent2Service } from './scent2.service';

describe('Scent2Service', () => {
  let service: Scent2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Scent2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
