import { TestBed } from '@angular/core/testing';

import { ServiceGeniricService } from './service-geniric.service';

describe('ServiceGeniricService', () => {
  let service: ServiceGeniricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGeniricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
