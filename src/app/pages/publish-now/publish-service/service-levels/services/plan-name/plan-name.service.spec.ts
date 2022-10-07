import { TestBed } from '@angular/core/testing';

import { PlanNameService } from './plan-name.service';

describe('PlanNameService', () => {
  let service: PlanNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
