import { TestBed } from '@angular/core/testing';

import { RegioncallfuncService } from './regioncallfunc.service';

describe('RegioncallfuncService', () => {
  let service: RegioncallfuncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegioncallfuncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
