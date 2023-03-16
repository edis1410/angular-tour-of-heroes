import { TestBed } from '@angular/core/testing';

import { StarWarsFacadeService } from './star-wars-facade.service';

describe('StarWarsFacadeService', () => {
  let service: StarWarsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
