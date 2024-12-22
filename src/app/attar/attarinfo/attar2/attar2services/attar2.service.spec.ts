import { TestBed } from '@angular/core/testing';

import { Attar2Service } from './attar2.service';

describe('Attar2Service', () => {
  let service: Attar2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Attar2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
