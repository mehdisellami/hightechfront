import { TestBed } from '@angular/core/testing';

import { CatearticlesService } from './catearticles.service';

describe('CatearticlesService', () => {
  let service: CatearticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatearticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
