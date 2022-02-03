import { TestBed } from '@angular/core/testing';

import { TestadviceService } from './testadvice.service';

describe('TestadviceService', () => {
  let service: TestadviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestadviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
