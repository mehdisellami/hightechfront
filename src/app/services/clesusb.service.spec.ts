import { TestBed } from '@angular/core/testing';

import { ClesusbService } from './clesusb.service';

describe('ClesusbService', () => {
  let service: ClesusbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClesusbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
