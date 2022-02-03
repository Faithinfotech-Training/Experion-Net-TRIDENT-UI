import { TestBed } from '@angular/core/testing';

import { FinalbillService } from './finalbill.service';

describe('FinalbillService', () => {
  let service: FinalbillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalbillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
