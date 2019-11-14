import { TestBed } from '@angular/core/testing';

import { APIMockService } from './apimock.service';

describe('APIMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIMockService = TestBed.get(APIMockService);
    expect(service).toBeTruthy();
  });
});
