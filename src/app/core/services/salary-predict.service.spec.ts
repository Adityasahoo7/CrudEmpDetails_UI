import { TestBed } from '@angular/core/testing';

import { SalaryPredictService } from './salary-predict.service';

describe('SalaryPredictService', () => {
  let service: SalaryPredictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryPredictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
