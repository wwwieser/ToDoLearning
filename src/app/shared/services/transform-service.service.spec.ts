import { TestBed } from '@angular/core/testing';

import { TransformServiceService } from './transform-service.service';

describe('TransformServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransformServiceService = TestBed.get(TransformServiceService);
    expect(service).toBeTruthy();
  });
});
